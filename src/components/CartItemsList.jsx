import { useSelector } from "react-redux"
import { CartItem } from '../components'

function CartItemsList() {
    const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <div>
        {cartItems.map((item) => {
            return <CartItem key={item.cartID} cardItem={item}/>
        })}
    </div>
  )
}

export default CartItemsList