package com.desafio_bridge.number_web_app.model;

import java.util.ArrayList;
import java.util.List;

public class Number {
    private final int numK;

    private List<Integer> listaN = new ArrayList<>();

    private final int numN;

    public Number(int numK, List<Integer> listaN, int numN) {
        this.numK = numK;
        this.listaN = listaN;
        this.numN = numN;
    }

    public int getNumK() {
        return numK;
    }

    public List<Integer> getListaN() {
        return listaN;
    }

    public int getNumN() {
        return numN;
    }
}
