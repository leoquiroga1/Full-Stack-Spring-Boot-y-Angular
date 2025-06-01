package com.unisalle.nbernal.products_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unisalle.nbernal.products_backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
