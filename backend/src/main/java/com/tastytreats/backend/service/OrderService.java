package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Order;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
// The OrderService interface defines the contract for the service layer.
// It lists all the methods that any implementation of this service must provide.
// This ensures that the service layer has a consistent API, which is important for maintainability and testability.
public interface OrderService {
    List<Order> getAllOrders();
    Optional<Order> getOrderById(ObjectId id);
    Order createOrder(Order order);
    Order updateOrder(ObjectId id, Order order);
    void deleteOrder(ObjectId id);

    List<Order> getOrdersByCustomer(String firstName, String lastName);

    List<Order> getOrdersByPriceRange(BigDecimal minPrice, BigDecimal maxPrice);

    List<Order> findOrdersWithinPriceRange(BigDecimal minPrice, BigDecimal maxPrice);



    Page<Order> getOrdersByLastName(String lastName, Pageable pageable);
}
