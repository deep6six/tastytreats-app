package com.tastytreats.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;



@Document(collection = "reviews")  // Maps this class to the "reviews" collection in MongoDB
@Data // Lombok annotation to generate getters, setters, toString, etc.
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields as parameters
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor
public class Review {
    @Id
    private ObjectId id;
    private Long customerId;
    private String reviewBody;
    private int rating;
    private String reviewTitle;
    private LocalDate createdDate = LocalDate.now(); // Set the creation date/time


}
