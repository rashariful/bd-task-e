import React from "react";
import Products from "../../Products/Products";
import SummerSale from "../../SummerSale/SummerSale";
import Banner from "../Banner/Banner";
import Futures from "../Futures/Futures";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-8">
      <section>
        <Banner></Banner>
      </section>
      <section>
       <Futures></Futures>
      </section>
      <section className="mt-10">
      <Products></Products>
      </section>
      <section className="mt-10">
      <SummerSale></SummerSale>
      </section>
    </div>
  );
};

export default Home;
