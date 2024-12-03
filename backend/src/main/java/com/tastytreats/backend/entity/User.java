package com.tastytreats.backend.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	private ObjectId id;
	private String username;
	private String password;
	private Role role; //CUSTOMER, EMPLOYEE, ADMIN
}
