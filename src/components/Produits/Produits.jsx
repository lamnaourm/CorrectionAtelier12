import axios from "axios";
import React, { useEffect, useState } from "react";
import Produit from "../Produit/Produit";
import styles from "./produits.module.css";

const Produits = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [catId, setCatId] = useState('0');

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };

    getData().then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    let api = "";
    if (catId == 0) api = "https://api.escuelajs.co/api/v1/products";
    else api = `https://api.escuelajs.co/api/v1/categories/${catId}/products`;

    const getData = async () => {
      const res = await axios.get(api);
      return res.data;
    };

    getData().then((products) => setProducts(products));
  }, [catId]);
  return (
    <div>
      <select value={catId} onChange={(e) => setCatId(parseInt(e.target.value))}>
        <option value={0}>Tous les produits</option>
        {categories.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <div className={styles.list}>
        {products.map((item) => (
          <Produit product={item} />
        ))}
      </div>
    </div>
  );
};

export default Produits;
