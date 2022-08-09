package com.desafio_bridge.number_web_app.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio_bridge.number_web_app.service.NumberService;
import com.desafio_bridge.number_web_app.model.Number;

@RequestMapping("api/v1/number")
@RestController
@CrossOrigin
public class NumberController {

    @Autowired
    private NumberService numberService;

    @GetMapping(path="{k}")
    public List<Integer> getNumberNByK(@PathVariable("k") int k){
        return numberService.getNByKValue(k);
    }

    @GetMapping
    public List<Number> getAllNumbers(){
        return numberService.getAllNumbers();
    }

}
