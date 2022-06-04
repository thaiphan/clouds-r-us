import type { NextPage } from "next";
import Head from "next/head";
import { ProductCard } from "../components/ProductCard";
import { useGetProductsQuery } from "../services/products";

const Home: NextPage = () => {
  const { isUninitialized, isLoading, data } = useGetProductsQuery();

  // TODO: Add a loading skeleton
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Clouds R Us</title>
      </Head>
      <div className="my-8">
        <h1 className="text-6xl font-black">Clouds R Us</h1>
      </div>
      <div className="my-8">
        <h2 className="text-4xl font-bold mb-2">Products</h2>
        <p>
          Designed with love in Fitzroy and built with union labour in Laverton,
          our planes are able to produce a wide variety of chemtrails for
          different needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {data?.map((product) => (
          <ProductCard key={product.productId} {...product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
