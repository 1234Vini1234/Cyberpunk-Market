"use client";
import { useProducts } from "@/src/hooks/useProducts";

export default function ProductList() {
    const { products, loading, error } = useProducts();
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products: {error}</p>;
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </li>
            ))}
            </ul>
    );
}   2