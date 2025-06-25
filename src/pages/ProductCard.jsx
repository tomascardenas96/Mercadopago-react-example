import "./ProductCard.css";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";

import React from "react";
import { formatFlightDate } from "../lib/date";

function ProductCard({ name, description, price, fromDate, toDate }) {
  return (
    <div className="product-card">
      <div className="flight-details">
        <div>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
        <p>${price}</p>
      </div>

      <hr />

      <div className="flight-dates">
        <p>
          <MdFlightTakeoff />
          {formatFlightDate(fromDate)}
        </p>
        {toDate && (
          <p>
            <MdFlightLand />
            {formatFlightDate(toDate)}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
