package com.tastytreats.backend.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.GenericFilterBean;

import com.tastytreats.backend.service.CustomUserDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

	private final JwtUtils jwtUtils;
	private final CustomUserDetailsService userDetailsService;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		System.out.println("JwtAuthenticationFilter doFilter");

		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		String requestURI = httpServletRequest.getRequestURI();
		System.out.println("RequestURI: " + requestURI);

		String token = httpServletRequest.getHeader("Authorization");
		
		String authorizationHeader = httpServletRequest.getHeader("Authorization");
		System.out.println("Authorization Header: " + authorizationHeader); 
		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
		    token = authorizationHeader.substring(7);
		    System.out.println("Token: " + token);
		}
		
		
		if (token != null && token.startsWith("Bearer ")) {
			token = token.substring(7);

			System.out.println("Token: " + token);

			String username = jwtUtils.getUsernameFromToken(token);

			if (username != null && SecurityContextHolder.getContext()
					.getAuthentication() == null) {
				UserDetails userDetails = userDetailsService
						.loadUserByUsername(username);
				if (jwtUtils.validateToken(token)) {
					UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					authentication
							.setDetails(new WebAuthenticationDetailsSource()
									.buildDetails(httpServletRequest));
					SecurityContextHolder.getContext()
							.setAuthentication(authentication);
				}
			}
		}
		chain.doFilter(request, response);
	}

}
