package com.tastytreats.backend.controller;
import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.service.OrderService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return new ResponseEntity<List<Order>>(orderService.getAllOrders(), HttpStatus.OK);

    } // fetch all orders
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED); // return created order
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable ObjectId id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    } //fetch order by ID

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable ObjectId id, @RequestBody Order order) {
        Order updatedOrder = orderService.updateOrder(id, order);
        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    } //save updated order to database

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable ObjectId id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } //delete order ID from database

    @GetMapping("/customer")
    public ResponseEntity<List<Order>> getOrdersByCustomer(@RequestParam String firstName, @RequestParam String lastName) {
        List<Order> orders = orderService.getOrdersByCustomer(firstName, lastName);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    } //fetch orders from customer name

    @GetMapping("/price-range-query")
    public ResponseEntity<List<Order>> findOrdersWithinPriceRange(@RequestParam BigDecimal minPrice, @RequestParam BigDecimal maxPrice) {
        return new ResponseEntity<>(orderService.findOrdersWithinPriceRange(minPrice, maxPrice), HttpStatus.OK);
    }
    @GetMapping("/lastname")
    public ResponseEntity<Page<Order>> getOrdersByLastName(@RequestParam String lastName, Pageable pageable) {
        return new ResponseEntity<>(orderService.getOrdersByLastName(lastName, pageable), HttpStatus.OK);
    }

    @GetMapping("/price-range")
    public ResponseEntity<List<Order>> getOrdersByPriceRange(@RequestParam BigDecimal minPrice, @RequestParam BigDecimal maxPrice) {
        return new ResponseEntity<>(orderService.getOrdersByPriceRange(minPrice, maxPrice), HttpStatus.OK);
    }
}



