package com.tastytreats.backend.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tastytreats.backend.entity.User;
import com.tastytreats.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		System.out.println("CustomUserDetailsService loadUserByUsername");
		User user = userRepository.findByUsername(username).orElseThrow(
				() -> new UsernameNotFoundException("User not found"));

		return new org.springframework.security.core.userdetails.User(
				user.getUsername(), user.getPassword(), getAuthorities(user));
	}

	private Collection<? extends GrantedAuthority> getAuthorities(User user) {
		System.out.println("CustomUserDetailsService getAuthorities");
		return user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName()))
				.collect(Collectors.toList());
	}
}