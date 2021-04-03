import React from "react";
import "../style/components/Categories.css";

const Categories = ({ children }) => (
  <div className="categories">
    <h3 className="categories__title">Mi lista</h3>
    {children}
  </div>
);

export default Categories;
