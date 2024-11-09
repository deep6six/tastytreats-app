package com.tastytreats.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tastytreats.backend.entity.Role;
import com.tastytreats.backend.entity.User;
import com.tastytreats.backend.repository.UserRepository;

@Service
public class RegistrationService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(User user) {
        try {
            if (userRepository.existsByUsername(user.getUsername())) {
                return "Username taken";
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(Role.CUSTOMER);
            userRepository.save(user);
            return "Registration successful";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
