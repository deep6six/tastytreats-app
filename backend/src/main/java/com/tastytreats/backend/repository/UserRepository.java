package com.tastytreats.backend.repository;

import java.util.Optional;
import java.util.Set;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.tastytreats.backend.entity.Role;
import com.tastytreats.backend.entity.User;

public interface UserRepository extends MongoRepository<User, ObjectId> {
	Optional<User> findByUsername(String username);
	Optional<Set<Role>> findRolesByUsername(String username);
	boolean existsByUsername(String username);
}
