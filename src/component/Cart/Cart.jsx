import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import cart from "./cart.css";
const Cart = () => {
  const { myCart, total,setAddCart,setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckOut =()=>{
    setAddCart([]);
    setTotal(0)
  }
  const handleGoHome =()=>{
    navigate("/")
  }
  return (
    <div className="cart-cover">
      <div className="cart-header">Giỏ Hàng</div>
      <section className="cart-container">
        <div className="cart-items-cover">
          {myCart.map((item) => {
            return (
              <div className="cart-items" key={item.id}>
                <img src={item.imageURL} alt="ds" className="item-imageUrl" />
                <div className="item-price-name">
                  {item.name} : {`${item.price} $`}
                </div>
              </div>
            );
          })}
        </div>

      
         
          <div className="btn cart-total"> Tổng Cộng : {`${total} $`}</div>
     
      </section>
        <button className=" btn cart-check-out" onClick={handleCheckOut}> DONE </button>
        <button className="btn cart-go-home" onClick={handleGoHome}> Trở về trang chủ </button>
    </div>
  );
};

export default Cart;
