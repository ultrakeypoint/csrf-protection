package com.luckystore.vo;

import java.util.List;

import lombok.Data;

@Data
public class OrderVo {
    private String orderDate;
    private List<HamburgerVo> hamburgerList;
    private String address;
}
