import { useSelector } from "react-redux"
import SectionTitle from '../components/SectionTitle'
import { CartItemsList, CartTotals } from '../components'
import { Link } from "react-router-dom";


function Cart() {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  
  if(numItemsInCart === 0){
    return <SectionTitle text="Your Cart Is Empty" />
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemsList/>
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals/>
        {user ? (
          <Link className="btn btn-primary btn-block mt-8" to="/checkout">Procced to checkout</Link>
        ) : (
          <Link className="btn btn-primary btn-block mt-8" to="/login">Please Login</Link>
        )}
      </div>
    </div>
  )
}

export default Cart