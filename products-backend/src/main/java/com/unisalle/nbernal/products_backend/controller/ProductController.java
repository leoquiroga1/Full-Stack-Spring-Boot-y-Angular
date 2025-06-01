package com.unisalle.nbernal.products_backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.unisalle.nbernal.products_backend.model.Product;
import com.unisalle.nbernal.products_backend.repository.ProductRepository;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    
    @GetMapping("/")
    public Map<String, String> SayHello(){
        return Map.of("message", "Hello, world!");
    }

    @GetMapping("api/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @PostMapping("api/products")
    public Product createProduct(@RequestBody Product product){
        var newProdcut = productRepository.save(product);
        return newProdcut; 
    }
}
