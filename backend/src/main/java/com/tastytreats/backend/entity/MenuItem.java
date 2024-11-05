package com.tastytreats.backend.entity;

import java.math.BigDecimal;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "menuitems")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
	@Id
	private ObjectId id;
	
	public enum AvailabilityStatus { AVAILABLE, UNAVAILABLE, OUT_OF_STOCK; }
	public enum Category { APPETIZERS, ENTREES, SIDES, DESSERTS, SALADS, BEVERAGES; }

	private String title;
	private BigDecimal price;
	private Integer quantity;
	private AvailabilityStatus availabilityStatus;
	private Category category;
	
}
