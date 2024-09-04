import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { GlobalStyle } from "./styles";
import PageMain from "/src/components/pages/main-page/main-page";
import OrderRegistration from "/src/components/pages/order-registration/order-registration";
import { features } from "/src/mocks/features-list";
import { products } from "/src/mocks/products-list";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path="/" element={<PageMain features={features} />} />
          <Route
            path="/order"
            element={<OrderRegistration products={products} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
