package com.luckystore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.luckystore.service.OrderService;
import com.luckystore.vo.HamburgerVo;
import com.luckystore.vo.OrderVo;
import com.luckystore.vo.ReceiptVo;

@RestController
@RequestMapping("/")
public class OrderController {

	private OrderService orderService = new OrderService();
	
	@PostMapping("/order")
	public ResponseEntity<Object> order(@RequestBody OrderVo orderVo) throws JsonProcessingException {

		long no = orderService.generateOrderNumber();

		ReceiptVo receiptVo = new ReceiptVo();
		receiptVo.setOrderDate(orderVo.getOrderDate());
		receiptVo.setOrderNumber(no);
		receiptVo.setHamburgerList(orderVo.getHamburgerList());
		receiptVo.setAddress(orderVo.getAddress());
		
		for (HamburgerVo hamburgerVo : orderVo.getHamburgerList()) {
			orderService.requestMake(no, hamburgerVo);
		}
		orderService.reserveDelivery(no, orderVo);

		return ResponseEntity.ok(receiptVo);
	}
}
