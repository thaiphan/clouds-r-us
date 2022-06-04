import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { GetProductsResponse, Product } from "../../types/Product";
import BigNumber from "bignumber.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (!process.env.ALL_THE_CLOUDS_API_KEY) {
    res.status(500).end();
    return;
  }

  try {
    const response = await axios.get<GetProductsResponse>(
      "http://alltheclouds.com.au/api/Products",
      {
        headers: {
          "api-key": process.env.ALL_THE_CLOUDS_API_KEY,
        },
      }
    );

    const products = response.data.map<Product>((product) => {
      return {
        ...product,
        // Add a placeholder image
        image: "https://placekitten.com/g/1600/900",
        // Apply a 25% markup to prices
        unitPrice: new BigNumber(product.unitPrice)
          .multipliedBy(1.25)
          .toNumber(),
      };
    });

    res.status(200).json(products);
  } catch {
    res.status(502).end();
  }
}
