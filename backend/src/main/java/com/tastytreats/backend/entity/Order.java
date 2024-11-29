package com.tastytreats.backend.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.math.BigDecimal;


@Document(collection = "orders") // Maps this class to the "orders" collection in MongoDB
@Data // Lombok annotation to generate getters, setters, toString, etc.
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields as parameters
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor
public class Order {
    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private BigDecimal price;



}
