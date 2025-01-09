'use client'
import { Catalog } from "@/Components/Catalog";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/ProductList";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <ProductList />
        <Footer />

      </div>
    </>
  );
}
