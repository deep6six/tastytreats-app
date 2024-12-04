package com.tastytreats.backend.service;

import java.util.Collections;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tastytreats.backend.entity.Role;
import com.tastytreats.backend.entity.User;
import com.tastytreats.backend.repository.RoleRepository;
import com.tastytreats.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RegistrationService {
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final PasswordEncoder passwordEncoder;

	public String registerUser(User user) {
		try {
			if (userRepository.existsByUsername(user.getUsername())) {
				return "Username taken";
			}
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			Role role = roleRepository.findByName("ROLE_CUSTOMER")
					.orElseThrow(() -> new RuntimeException("Role not found"));
			user.setRoles(Collections.singletonList(role));
			userRepository.save(user);
			return "Registration successful";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
}
