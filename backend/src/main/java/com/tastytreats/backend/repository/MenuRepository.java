package com.tastytreats.backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.tastytreats.backend.entity.MenuItem;

public interface MenuRepository extends MongoRepository<MenuItem, ObjectId> {

}
