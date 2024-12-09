import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../config';
import AddToCart from './AddToCart';

export default function SingleView() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product by ID from the server
  const fetchProductById = (id) => {
    fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error('Error fetching product:', error));
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (!product) return (<div className="loading-spinner">Loading...</div>);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <AddToCart product={product} />
    </div>
  );
}
