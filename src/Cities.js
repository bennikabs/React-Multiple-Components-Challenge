import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Cities() {
  return (
    <div className="Cities">
    <Header />
    <ul>
        <li>Paris</li>
        <li>Moscow</li>
        <li>San Francisco</li>
        <li>Sydney</li>
    </ul>
    <Footer />
    </div>
  );
}
