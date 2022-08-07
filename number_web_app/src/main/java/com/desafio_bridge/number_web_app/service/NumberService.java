package com.desafio_bridge.number_web_app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.desafio_bridge.number_web_app.dao.NumberDao;

@Service
public class NumberService {

    private final NumberDao numberDao;

    @Autowired
    public NumberService(@Qualifier("local") NumberDao numberDao) {
        this.numberDao = numberDao;
    }

    public int getNByKValue(int k){
        List<Integer> listaN = new ArrayList<>();
        int numN;

        int numberOfDivisor;
        int numberOfDivisorAnt=0;

        for(int i=2; i <= k; i++)
        {
            numberOfDivisor = 0;
            for(int j=1; j<= i; j++){
                if(i % j == 0){
                    numberOfDivisor += 1;
                }
            }
            if(numberOfDivisor == numberOfDivisorAnt){
                listaN.add(i-1);
            }
            
            numberOfDivisorAnt = numberOfDivisor;
        }

        numN = listaN.size();

        this.numberDao.addNumber(k, listaN, numN);

        return numN;
    }

}
