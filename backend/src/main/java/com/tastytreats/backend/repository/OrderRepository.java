package com.tastytreats.backend.repository;
import com.tastytreats.backend.entity.Order;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigDecimal;
import java.util.List;
// Repository interface for CRUD operations on Order entities
public interface OrderRepository extends MongoRepository<Order, ObjectId> {
    List<Order> findByFirstNameAndLastName(String firstName, String lastName);
    List<Order> findByPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);

    Page<Order> findByLastName(String lastName, Pageable pageable);
//findByFirstNameAndLastName: Retrieves orders based on the customer's first and last name.
//findByPriceBetween: Retrieves orders within a specified price range.
//findByCustomerId: Retrieves orders based on the customer ID.
//findByLastName(String lastName, Pageable pageable): Retrieves orders by last name with pagination support.
}
