package com.luckystore.service;

import java.util.concurrent.atomic.AtomicLong;

import com.luckystore.vo.HamburgerVo;
import com.luckystore.vo.OrderVo;

public class OrderService {

    private static final AtomicLong sequence = new AtomicLong(System.currentTimeMillis() / 1000);
    
    public long generateOrderNumber() {
        System.out.println("-------------------------------------------------------------------------------");
        return sequence.incrementAndGet();
    }

    public void requestMake(long orderNo, HamburgerVo hamburgerVo) {
        System.out.println(String.format("OrdNo:%d, Hamburger:%s Make Request", orderNo, hamburgerVo.getName()));
    }

    public void reserveDelivery(long orderNo, OrderVo orderVo) {
        System.out.println(String.format("OrdNo:%d, Address:%s Delivery Reservation", orderNo, orderVo.getAddress()));
    }
}

