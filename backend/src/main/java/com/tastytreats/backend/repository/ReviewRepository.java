package com.tastytreats.backend.repository;

import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.entity.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

// ReviewRepository: Defines the method findByCustomerId to retrieve reviews by customer ID.
//ReviewService: Declares the methods that will be implemented in the service layer.
//ReviewServiceImp: Implements the ReviewService interface, using the ReviewRepository to perform CRUD operations.
//ReviewController: Uses the service methods to handle HTTP requests and return appropriate responses.
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {

    List<Review> findByCustomerId(Long customerId);
    // Find reviews by rating
    List<Review> findByRating(int rating);
}
