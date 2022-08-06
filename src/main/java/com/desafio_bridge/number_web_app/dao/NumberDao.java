package com.desafio_bridge.number_web_app.dao;

import com.desafio_bridge.number_web_app.model.Number;

import java.util.List;
import java.util.Optional;

public interface NumberDao {

    void addNumber(int k, List<Integer> listaN, int numN);
    
    List<Number> getAllNumbers();

    Optional<Number> selectNumber(int k);
}
