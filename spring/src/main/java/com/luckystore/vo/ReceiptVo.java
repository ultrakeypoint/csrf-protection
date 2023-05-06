package com.luckystore.vo;

import java.util.List;

import lombok.Data;

@Data
public class ReceiptVo {
    private String orderDate;
    private long orderNumber;
    private List<HamburgerVo> hamburgerList;
    private String address;
}
