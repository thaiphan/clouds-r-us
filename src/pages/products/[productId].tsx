import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "../../api/products";
import type { Product } from ".././../types/Product";

const ProductPage: NextPage<Product> = (props) => {
  const handleBuyNow = () => {
    alert("Purchased.");
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{props.name} - Clouds R Us</title>
      </Head>
      <div className="my-8">
        <h1 className="text-6xl font-black">
          <Link href="/">
            <a className="hover:underline">Clouds R Us</a>
          </Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Image
          src={props.image}
          width={1600}
          height={900}
          layout="responsive"
        />
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{props.name}</h2>
            <p>{props.description}</p>
          </div>
          <div className="font-bold text-2xl">
            {new Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: "AUD",
            }).format(props.unitPrice)}
          </div>
          <button
            onClick={handleBuyNow}
            className="bg-black text-white p-4 rounded-3xl hover:bg-white hover:text-black border-2 border-black focus:text-black focus:bg-white outline-none"
          >
            Buy now
          </button>
        </div>
      </div>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  return {
    paths: products.map((product) => ({
      params: {
        productId: product.productId,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{}, { productId: string }> = async (
  context
) => {
  const products = await getAllProducts();

  const product = products.find(
    (product) => product.productId === context.params?.productId
  );

  if (product) {
    return {
      props: product,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default ProductPage;
