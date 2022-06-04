import type { Product } from "../../types/Product";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = (product: Product) => {
  return (
    <article className="hover:bg-gray-100 flex flex-col flex-1 group hover:cursor-pointer relative shadow-lg rounded-lg">
      <div className="aspect-[16/9]">
        <Image
          className="rounded-t-lg"
          src={product.image}
          width={1600}
          height={900}
          layout="responsive"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg">
          <Link href={`/products/${product.productId}`}>
            <a className="group-hover:underline focus:underline outline-none after:absolute after:inset-0">
              {product.name}
            </a>
          </Link>
        </h3>
        <p className="flex-1">{product.description}</p>
        <div className="mt-2 font-bold">
          {new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
          }).format(product.unitPrice)}
        </div>
      </div>
    </article>
  );
};
