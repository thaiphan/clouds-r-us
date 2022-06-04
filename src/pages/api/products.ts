import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "../../types/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (!process.env.ALL_THE_CLOUDS_API_KEY) {
    res.status(500).end();
    return;
  }

  try {
    const response = await axios.get<Product[]>(
      "http://alltheclouds.com.au/api/Products",
      {
        headers: {
          "api-key": process.env.ALL_THE_CLOUDS_API_KEY,
        },
      }
    );

    const products = response.data.map((product) => {
      return {
        ...product,
        // Apply a 25% markup to prices
        unitPrice: product.unitPrice * 1.25,
      };
    });

    res.status(200).json(products);
  } catch {
    res.status(502).end();
  }
}
