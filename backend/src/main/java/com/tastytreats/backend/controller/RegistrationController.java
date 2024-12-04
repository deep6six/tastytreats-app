package com.tastytreats.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tastytreats.backend.entity.User;
import com.tastytreats.backend.service.RegistrationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/register")
@RequiredArgsConstructor
public class RegistrationController {
	private final RegistrationService registrationService;

	@PostMapping
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		String result = registrationService.registerUser(user);
		if (result.equals("Registration successful")) {
			return ResponseEntity.status(HttpStatus.CREATED).body(result);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
		}
	}

	@GetMapping
	public ResponseEntity<String> getRegistrationInfo() {
		return ResponseEntity
				.ok("Registration endpoint. Send a POST request to register.");
	}
}
