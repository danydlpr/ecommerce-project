package com.danydlpr.ecommerce.service;

import com.danydlpr.ecommerce.dto.Purchase;
import com.danydlpr.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
