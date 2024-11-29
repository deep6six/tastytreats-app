package com.tastytreats.backend.controller;

import com.tastytreats.backend.entity.Review;
import com.tastytreats.backend.service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
@CrossOrigin(origins="*")
public class ReviewController {
    @Autowired // Injects the ReviewService dependency
    private ReviewService reviewService;

    @GetMapping// Handles GET requests to /reviews and returns all reviews
    public ResponseEntity<List<Review>> getAllReviews() {
        return new ResponseEntity<>(reviewService.getAllReviews(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        return new ResponseEntity<>(reviewService.createReview(review), HttpStatus.CREATED);
    } // Handles POST requests to /review and creates a new review



    @PutMapping("/{id}") // Handles PUT requests to /review/{id} and updates the review with the specified ID
    public ResponseEntity<Review> updateReview(@PathVariable ObjectId id, @RequestBody Review review) {
        Review updatedReview = reviewService.updateReview(id, review);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")  // Handles DELETE requests to /review/{id} and deletes the review with the specified ID
    public ResponseEntity<Void> deleteReview(@PathVariable ObjectId id) {
        reviewService.deleteReview(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Review>> getReviewsByCustomerId(@PathVariable Long customerId) {
        List<Review> reviews = reviewService.getReviewsByCustomerId(customerId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }// Handles GET requests to /review/customer/{customerId} and returns reviews for the specified customer ID

    @GetMapping("/rating/{rating}")
    public ResponseEntity<List<Review>> getReviewsByRating(@PathVariable int rating) {
        List<Review> reviews = reviewService.getReviewsByRating(rating);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

}

