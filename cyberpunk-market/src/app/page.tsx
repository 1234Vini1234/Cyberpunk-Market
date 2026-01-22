"use client";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";


export default function homepage() {
  return (
    <main>
      <h1>Cyberpunk Market</h1>
      <p>Your one-stop shop for all things cyberpunk!</p>
      <ProductList />
    </main>
  );
}