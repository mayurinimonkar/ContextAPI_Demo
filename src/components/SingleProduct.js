import { useContext } from 'react'
import { Cart } from '../Context'
import './styles.css'

const SingleProduct = ({prod}) => {
    const {cart, setCart} = useContext(Cart)
  return (
    <div className="products">
      <img className= "productsImage" src={prod.thumbnail} alt={prod.title} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.title}</span>
        <span>₹ {prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default SingleProduct
