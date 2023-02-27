import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";

const Home = ({ cart, setCart}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
 

  useEffect(() => {
    const onLoadHandler = async () => {
      await performAPICall();
    };

    onLoadHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const performAPICall = async () => {
    try {
      setLoading(true);
      let response = await axios.get("https://dummyjson.com/products");
      setLoading(false)
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      {loading ? 
      <span>Loading...</span>
    :
    <div className="productContainer">
      {products && products.map((prod) => (
      <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id} />
    ))}
    </div>
    
    }
      
    </div>
  );
};

export default Home;
