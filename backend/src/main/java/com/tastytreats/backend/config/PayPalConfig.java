package com.tastytreats.backend.config;

import com.paypal.sdk.PaypalServerSDKClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.Environment;
import org.slf4j.event.Level;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class PayPalConfig {

        @Bean
        @Primary
        public PaypalServerSDKClient paypalServerSDKClient() {
                return new PaypalServerSDKClient.Builder()
                                .loggingConfig(builder -> builder
                                                .level(Level.DEBUG)
                                                .requestConfig(logConfigBuilder -> logConfigBuilder.body(true))
                                                .responseConfig(logConfigBuilder -> logConfigBuilder.headers(true)))
                                .httpClientConfig(configBuilder -> configBuilder
                                                .timeout(0))
                                .clientCredentialsAuth(new ClientCredentialsAuthModel.Builder(
                                                "CLIENT_ID",
                                                "CLIENT_SECRET")
                                                .build())
                                .environment(Environment.SANDBOX)
                                .build();
        }
}
