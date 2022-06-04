import { ProductCard } from "./ProductCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("it works", () => {
  render(
    <ProductCard
      image="https://placekitten.com/g/1600/900"
      productId="1234"
      name="Big shoe"
      description="Perfect for clowns who ran away at the stroke of midnight the night before."
      unitPrice={123.53}
      maximumQuantity={null}
    />
  );

  expect(screen.getByRole("link")).toHaveTextContent("Big shoe");
  expect(screen.getByRole("link")).toHaveAttribute("href", "/products/1234");
});
