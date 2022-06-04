import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "../../types/Product";
import { getAllProducts } from "../../api/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch {
    res.status(502).end();
  }
}
