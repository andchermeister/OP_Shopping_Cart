import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductPage from "./ProductPage.jsx";
import { MemoryRouter, Route, Routes, Outlet } from "react-router";

describe("ProductPage component", () => {
  it("adding to the basket after clicking the add to basket icon", async () => {
    const user = userEvent.setup();

    const setProductCounter = vi.fn();
    const addToCart = vi.fn();

    const products = [
      { id: 1, title: "Test Product", price: 10, image: "test.jpg" },
    ];

    const productCounter = { 1: 2 };

    const ContextProvider = () => (
      <Outlet
        context={{ products, productCounter, setProductCounter, addToCart }}
      />
    );

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ContextProvider />}>
            <Route index element={<ProductPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const addIcon = screen
      .getByRole("img", { name: /product-image/i })
      .parentElement.querySelector("i");

    await user.click(addIcon);
    const callArg = setProductCounter.mock.calls[0][0];
    const newState = callArg({ 1: 2 });
    expect(addToCart).toHaveBeenCalledWith(1, 2, 10);
    expect(newState).toEqual({ 1: 0 });
  });
});
