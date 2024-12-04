package com.tastytreats.backend.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.tastytreats.backend.entity.Role;

public interface RoleRepository extends MongoRepository<Role, ObjectId> {
	Optional<Role> findByName(String name);
}
