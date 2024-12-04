package com.tastytreats.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tastytreats.backend.config.JwtUtils;
import com.tastytreats.backend.dto.ErrorResponse;
import com.tastytreats.backend.dto.LoginRequest;
import com.tastytreats.backend.dto.LoginResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class LoginController {
	private final AuthenticationManager authenticationManager;

	private final JwtUtils jwtUtils;

	@PostMapping
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
		try {
			System.out.println("LoginController loginUser");
			Authentication auth = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(
							loginRequest.getUsername(),
							loginRequest.getPassword()));

			String jwtToken = jwtUtils.generateToken(auth);
			System.out.println("GENERATED TOKEN: " + jwtToken);
			return ResponseEntity.ok(new LoginResponse(jwtToken));
		} catch (BadCredentialsException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(new ErrorResponse("Invalid login credentials"));
		}
	}

	@GetMapping
	public ResponseEntity<String> getLoginInfo() {
		return ResponseEntity.ok(
				"Login endpoint. Send a POST request with valid credentials.");
	}
}
