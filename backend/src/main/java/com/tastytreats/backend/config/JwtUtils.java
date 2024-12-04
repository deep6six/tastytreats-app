package com.tastytreats.backend.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {
	private final String jwtSecret;

	public JwtUtils(@Value("${JWT_SECRET_KEY}") String jwtSecret) {
		this.jwtSecret = jwtSecret;
		System.out.println("JwtUtils constructor, jwtSecret = " + jwtSecret);
	}

	private final int jwtExpirationMs = 10800000;

	public String generateToken(Authentication authentication) {
		System.out.println("JwtUtils generateToken");
		SecretKey secretKey = Keys
				.hmacShaKeyFor(java.util.Base64.getDecoder().decode(jwtSecret));
		System.out.println("SecretKey: " + secretKey);

		return Jwts.builder().setSubject(authentication.getName())
				.setIssuedAt(new Date())
				.setExpiration(
						new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(secretKey, SignatureAlgorithm.HS512).compact();
	}

	public String getUsernameFromToken(String token) {
		System.out.println("JwtUtils getUsernameFromToken");
		token = Jwts.parserBuilder()
				.setSigningKey(Keys.hmacShaKeyFor(
						java.util.Base64.getDecoder().decode(jwtSecret)))
				.build().parseClaimsJws(token).getBody().getSubject();
		return token;
	}

	public boolean validateToken(String token) {
		System.out.println("JwtUtils validateToken");
		try {
			Claims claims = Jwts.parserBuilder()
					.setSigningKey(Keys.hmacShaKeyFor(
							java.util.Base64.getDecoder().decode(jwtSecret)))
					.build().parseClaimsJws(token).getBody();

			return !claims.getExpiration().before(new Date());
		} catch (JwtException | IllegalArgumentException e) {
			return false;
		}
	}
}
