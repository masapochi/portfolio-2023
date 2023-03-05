import { useState } from "react";
import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/header/Navbar";
export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
