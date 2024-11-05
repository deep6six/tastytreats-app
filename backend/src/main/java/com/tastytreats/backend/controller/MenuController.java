package com.tastytreats.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tastytreats.backend.entity.MenuItem;
import com.tastytreats.backend.service.MenuService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/menu")
public class MenuController {
	@Autowired
	private MenuService menuService;
	
	@GetMapping
	public ResponseEntity<List<MenuItem>> getAllMenuItems() {
		return new ResponseEntity<List<MenuItem>>(menuService.allMenuItems(), HttpStatus.OK);
	}
}
