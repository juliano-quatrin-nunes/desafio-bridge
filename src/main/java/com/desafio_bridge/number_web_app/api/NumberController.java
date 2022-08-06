package com.desafio_bridge.number_web_app.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio_bridge.number_web_app.service.NumberService;

@RequestMapping("api/v1/number")
@RestController
public class NumberController {

    @Autowired
    private NumberService numberService;

    @GetMapping(path="{k}")
    public int getNumberNByK(@PathVariable("k") int k){
        return numberService.getNByKValue(k);
    }

}
