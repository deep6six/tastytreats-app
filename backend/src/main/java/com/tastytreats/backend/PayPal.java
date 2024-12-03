
package com.tastytreats.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSDKClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.http.client.HttpClientConfiguration;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.logging.configuration.ApiLoggingConfiguration;
import com.paypal.sdk.logging.configuration.ApiRequestLoggingConfiguration;
import com.paypal.sdk.logging.configuration.ApiResponseLoggingConfiguration;
import com.paypal.sdk.models.*;
import org.slf4j.event.Level;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.function.Consumer;

@SpringBootApplication
public class PayPal {

    @Value("ASvfB4WFS08-lrqAkciQBg5Ug7p2sy7Ua1z8f9XSxbKrmomn2glTMf5Bqctd8rvK7iqbhjv5z_u0bbz8")
    private String PAYPAL_CLIENT_ID;

    @Value("ENwqcnLnJGQIHdQZJpAajVoISLm7GKXZSRlD8TqIL1RgDXp1TYFyMMFTQ7FeLWW4ULpRBXCnLAgMgI74")
    private String PAYPAL_CLIENT_SECRET;

    public static void main(String[] args) {
        SpringApplication.run(PayPal.class, args);
    }

    @Bean
    public PaypalServerSDKClient paypalClient() {
        PaypalServerSDKClient.Builder clientBuilder = new PaypalServerSDKClient.Builder();
        // Logging configuration
        clientBuilder.loggingConfig(new Consumer<ApiLoggingConfiguration.Builder>() {
            @Override
            public void accept(ApiLoggingConfiguration.Builder builder) {
                builder.level(Level.DEBUG).requestConfig(new Consumer<ApiRequestLoggingConfiguration.Builder>() {
                    @Override
                    public void accept(ApiRequestLoggingConfiguration.Builder builder) {
                        builder.body(true);
                    }
                }).responseConfig(new Consumer<ApiResponseLoggingConfiguration.Builder>() {
                    @Override
                    public void accept(ApiResponseLoggingConfiguration.Builder builder) {
                        builder.headers(true);
                    }
                });
            }
        })
                .httpClientConfig(new Consumer<HttpClientConfiguration.Builder>() {
                    @Override
                    public void accept(HttpClientConfiguration.Builder builder) {
                        builder.timeout(0);
                    }
                })
                .environment(Environment.SANDBOX)
                .clientCredentialsAuth(new ClientCredentialsAuthModel.Builder(
                        PAYPAL_CLIENT_ID,
                        PAYPAL_CLIENT_SECRET).build())
                .build();

        return clientBuilder.build();
    }

    @Controller
    @RequestMapping("/")
    public class CheckoutController {

        private final ObjectMapper objectMapper;
        private final PaypalServerSDKClient client;

        public CheckoutController(ObjectMapper objectMapper, PaypalServerSDKClient client) {
            this.objectMapper = objectMapper;
            this.client = client;
        }

        @PostMapping("/api/orders")
        public ResponseEntity<Order> createOrder(@RequestBody Map<String, Object> request) {
            try {
                String cart = objectMapper.writeValueAsString(request.get("cart"));
                Order response = createOrder(cart);
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        private Order createOrder(String cart) throws IOException, ApiException {

            OrdersCreateInput ordersCreateInput = new OrdersCreateInput.Builder(
                    null,
                    new OrderRequest.Builder(
                            CheckoutPaymentIntent.fromString("CAPTURE"),
                            Arrays.asList(
                                    new PurchaseUnitRequest.Builder(
                                            new AmountWithBreakdown.Builder(
                                                    "USD",
                                                    "100").build())

                                            .build()))

                            .build())
                    .build();
            OrdersController ordersController = client.getOrdersController();
            ApiResponse<Order> apiResponse = ordersController.ordersCreate(ordersCreateInput);
            return apiResponse.getResult();
        }

        @PostMapping("/api/orders/{orderID}/capture")
        public ResponseEntity<Order> captureOrder(@PathVariable String orderID) {
            try {
                Order response = captureOrders(orderID);
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        private Order captureOrders(String orderID) throws IOException, ApiException {
            OrdersCaptureInput ordersCaptureInput = new OrdersCaptureInput.Builder(
                    orderID,
                    null)
                    .build();
            OrdersController ordersController = client.getOrdersController();
            ApiResponse<Order> apiResponse = ordersController.ordersCapture(ordersCaptureInput);
            return apiResponse.getResult();
        }

    }
}