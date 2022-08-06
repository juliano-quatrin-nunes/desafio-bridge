package com.desafio_bridge.number_web_app.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.desafio_bridge.number_web_app.model.Number;

@Repository("local")
public class LocalNumberDataAccessService implements NumberDao{

    List<Number> numberList = new ArrayList<>();

    @Override
    public void addNumber(int k, List<Integer> listaN, int numN) {
        numberList.add(new Number(k, listaN, numN));
    }

    @Override
    public List<Number> getAllNumbers() {
        return numberList;
    }

    @Override
    public Optional<Number> selectNumber(int k) {
        return numberList.stream().filter(number -> number.getNumK() == k).findFirst();
    }
    
}
