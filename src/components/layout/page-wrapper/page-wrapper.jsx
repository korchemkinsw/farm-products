import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";

function PageWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageWrapper;
