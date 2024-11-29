package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.repository.OrderRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

//The OrderServiceImp class implements the OrderService interface.
// It provides the actual logic for each method defined in the interface.
// This is where the interaction with the OrderRepository happens.
@Service // Marks this class as a Spring service
public class OrderServiceImp implements OrderService {
    @Autowired // Injects the OrderRepository dependency
    private OrderRepository orderRepository;
    // Retrieves all orders from the database
    public List<Order> getAllOrders() {return orderRepository.findAll();}

    // Retrieves a specific order by its ID
    public Optional<Order> getOrderById(ObjectId id) {
        return orderRepository.findById(id);
    }
    // Saves the given order to the database and returns the saved order
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    // Sets the ID of the order to the provided ID
    public Order updateOrder(ObjectId id, Order order) {
        order.setId(id);
        return orderRepository.save(order);
    }// Saves the updated order to the database and returns the saved order


    public void deleteOrder(ObjectId id) {
        orderRepository.deleteById(id);
    } // Deletes the order with the given ID from the database

    public List<Order> getOrdersByCustomer(String firstName, String lastName) {
        return orderRepository.findByFirstNameAndLastName(firstName, lastName);
    }// Finds and returns a list of orders that match the given first name and last name
    @Override
    public List<Order> getOrdersByPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return orderRepository.findByPriceBetween(minPrice, maxPrice);
    }
    @Override
    public List<Order> findOrdersWithinPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return List.of();
    }


    @Override
    public Page<Order> getOrdersByLastName(String lastName, Pageable pageable) {
        return orderRepository.findByLastName(lastName, pageable);
    }


}
