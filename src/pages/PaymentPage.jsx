import React from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./PaymentPage.css";
import useCreatePreference from "../hooks/useCreatePreference";

function PaymentPage() {
  const { createPayment, isPaymentLoading, paymentError } =
    useCreatePreference();

  return (
    <form
      className="payment-page_container"
      onSubmit={(e) => createPayment(e, products)}
    >
      <h1>Pago</h1>

      <div className="payment-products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.title}
            price={product.unit_price}
            fromDate={product.departureDate}
            toDate={product.returnDate}
          />
        ))}
      </div>

      <div className="payment-button">
        <input type="submit" value="Pagar" className={isPaymentLoading && "button-loading"} disabled={isPaymentLoading}  />
      </div>
    </form>
  );
}

export default PaymentPage;
