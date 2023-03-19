/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/header/Navbar";
import { Hero } from "@/features/hero";
import { Services } from "@/features/services";
import { Works } from "@/features/works";
import { Skills } from "@/features/skills";
import { About } from "@/features/about";
import { Contact } from "@/features/contact";
import { globalStyle } from "@/styles/globalStyle";

export default function App(): JSX.Element {
  return (
    <>
      <Global styles={globalStyle} />
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
