'use client'
import { Catalog } from "@/Components/Catalog";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/ProductList";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Header />
        <ProductList />
      </header>
    </>
  );
}
