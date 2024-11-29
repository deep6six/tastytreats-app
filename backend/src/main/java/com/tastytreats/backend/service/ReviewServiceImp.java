package com.tastytreats.backend.service;

import com.tastytreats.backend.entity.Review;
import com.tastytreats.backend.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImp implements ReviewService  {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    } //fetch all reviews

    @Override
    public Optional<Review> getReviewById(ObjectId id) {
        return Optional.empty();
    } // fetch by reviewID

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    } // make a review and save it to database

    @Override
    public Review updateReview(ObjectId id, Review review) {
        review.setId(id);
        return reviewRepository.save(review);
    } // update review and save it to database

    @Override
    public void deleteReview(ObjectId id) {
        reviewRepository.deleteById(id);
    } //delete review from database

    @Override
    public List<Review> getReviewsByCustomerId(Long customerId) {
        return reviewRepository.findByCustomerId(customerId);
    } //find review by CustomerID
    public List<Review> getReviewsByRating(int rating) {
        return reviewRepository.findByRating(rating);
    }

}
