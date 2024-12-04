package com.tastytreats.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tastytreats.backend.entity.MenuItem;
import com.tastytreats.backend.repository.MenuRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuService {
	private final MenuRepository menuRepository;

	public List<MenuItem> allMenuItems() {
		return menuRepository.findAll();
	}

}
