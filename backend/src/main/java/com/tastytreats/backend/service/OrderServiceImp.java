package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.repository.OrderRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class OrderServiceImp implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {return orderRepository.findAll();}


    public Optional<Order> getOrderById(ObjectId id) {
        return orderRepository.findById(id);
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }


    public Order updateOrder(ObjectId id, Order order) {
        order.setId(id);
        return orderRepository.save(order);
    }


    public void deleteOrder(ObjectId id) {
        orderRepository.deleteById(id);
    }

    public List<Order> getOrdersByCustomer(String firstName, String lastName) {
        return orderRepository.findByFirstNameAndLastName(firstName, lastName);
    }
}
