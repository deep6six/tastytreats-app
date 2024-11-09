package com.tastytreats.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
        .csrf(csrf -> csrf.disable())
        .cors(cors -> cors.configurationSource(request -> {
            CorsConfiguration config = new CorsConfiguration();
            config.addAllowedOrigin("http://localhost:3000");
            config.addAllowedMethod("*");
            config.addAllowedHeader("*");
            config.setAllowCredentials(true);
            return config;
        }))
        .authorizeHttpRequests(authz -> authz
            .requestMatchers("/register", "/menu").permitAll()
            .anyRequest().authenticated()
        );
        return httpSecurity.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
