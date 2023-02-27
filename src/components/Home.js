
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const onLoadHandler = async () => {
      await performAPICall();
    };

    onLoadHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const performAPICall = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      
      setProducts(response.data.products);
      
    } catch (error) {
      console.log(error);
    }

  };

  

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
};

export default Home;
