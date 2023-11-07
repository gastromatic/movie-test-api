import * as React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery/Gallery";

export default function App() {
  return (
    <>
      <NavBar />
      <Gallery />
      <Footer />
    </>
  );
}
