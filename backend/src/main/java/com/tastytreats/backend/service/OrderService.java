package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    public List<Order> allOrders() {
        return orderRepository.findAll();
    }
}
