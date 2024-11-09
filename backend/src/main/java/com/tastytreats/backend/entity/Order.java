package com.tastytreats.backend.entity;

import com.tastytreats.backend.service.OrderService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.math.BigDecimal;
import java.time.LocalDateTime;


@Document(collection = "order")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    public OrderService BackendApplication;
    @Id
    private ObjectId id;
    private String firstName;
    private String secondName;
    private Long customerId;
    private BigDecimal price;


}
