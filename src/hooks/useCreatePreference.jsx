import React, { useState } from "react";

function useCreatePreference() {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const createPayment = async (e, products) => {
    e.preventDefault();
    setIsPaymentLoading(true);
    setPaymentError(null);

    try {
      const response = await fetch(
        "http://localhost:3010/api/payment/create-preference",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(products),
        }
      );

      if (!response.ok) {
        throw new Error("Error al crear el pago");
      }

      const data = await response.json();

      //Abrir el init point en una pestaña nueva.
      window.open(data.init_point, "_blank");
    } catch (error) {
      console.error(error);
      setPaymentError(error);
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return { createPayment, isPaymentLoading, paymentError };
}

export default useCreatePreference;
