import axios from "axios";
import BigNumber from "bignumber.js";
import { GetProductsResponse, Product } from "../types/Product";

export const getAllProducts = async (): Promise<Product[]> => {
  const headers: { "api-key"?: string } = {};
  if (process.env.ALL_THE_CLOUDS_API_KEY) {
    headers["api-key"] = process.env.ALL_THE_CLOUDS_API_KEY;
  }

  const response = await axios.get<GetProductsResponse>(
    "http://alltheclouds.com.au/api/Products",
    {
      headers,
    }
  );

  return response.data.map<Product>((product) => {
    return {
      ...product,
      // Add a placeholder image
      image: "https://placekitten.com/g/1600/900",
      // Apply a 25% markup to prices
      unitPrice: new BigNumber(product.unitPrice).multipliedBy(1.25).toNumber(),
    };
  });
};
