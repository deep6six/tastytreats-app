package com.tastytreats.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.tastytreats.backend.service.CustomUserDetailsService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final CustomUserDetailsService customUserDetailsService;
	private final JwtUtils jwtUtils;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http)
			throws Exception {

		System.out.println("SecurityConfig securityFilterChain");

		http.csrf(csrf -> csrf.disable())
				.cors(cors -> cors.configurationSource(request -> {
					CorsConfiguration config = new CorsConfiguration();
					config.addAllowedOrigin("http://localhost:3000");
					config.addAllowedMethod("*");
					config.addAllowedHeader("*");
					config.setAllowCredentials(true);
					return config;
				}))
				.sessionManagement(session -> session
						.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(
						authorize -> authorize.requestMatchers("/**")
								.permitAll().anyRequest().authenticated())
				.httpBasic(Customizer.withDefaults());
		http.addFilterBefore(jwtAuthenticationFilter(),
				UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

	@Bean
	public JwtAuthenticationFilter jwtAuthenticationFilter() {
		System.out.println("SecurityConfig jwtAutheticationFilter");
		return new JwtAuthenticationFilter(jwtUtils, customUserDetailsService);
	}

	@Bean
	public AuthenticationManager authenticationManager(
			AuthenticationConfiguration config) throws Exception {
		System.out.println("SecurityConfig authenticationManager");
		return config.getAuthenticationManager();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		System.out.println("SecurityConfig userDetailsService");
		return customUserDetailsService;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		System.out.println("SecurityConfig passwordEncoder");
		return new BCryptPasswordEncoder();
	}

}
