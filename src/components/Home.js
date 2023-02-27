import { randProductName, randUuid, randImg, randNumber } from "@ngneat/falso";

import { useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const productArray = [...Array(20)].map(() => {
    return {
      id: randUuid(),
      name: randProductName(),
      price: randNumber({ min: 10, max: 1000 }),
      image: randImg(),
    };
  });

  const [products, setProducts] = useState(productArray);

  console.log(productArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
};

export default Home;
