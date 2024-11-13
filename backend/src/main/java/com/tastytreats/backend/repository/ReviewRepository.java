package com.tastytreats.backend.repository;

import com.tastytreats.backend.entity.Order;
import com.tastytreats.backend.entity.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;


public interface ReviewRepository extends MongoRepository<Review, ObjectId> {


}
