package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Review;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> getAllReviews();
    Optional<Review> getReviewById(ObjectId id);
    Review createReview(Review review);
    Review updateReview(ObjectId id, Review review);
    void deleteReview(ObjectId id);
    List<Review> getReviewsByCustomerId(Long customerId);

    List<Review> getReviewsByRating(int rating);
}
