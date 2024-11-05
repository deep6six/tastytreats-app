package com.tastytreats.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tastytreats.backend.entity.MenuItem;
import com.tastytreats.backend.repository.MenuRepository;

@Service
public class MenuService {
	@Autowired
	private MenuRepository menuRepository;
	
	public List<MenuItem> allMenuItems() { return menuRepository.findAll(); }
	
}
