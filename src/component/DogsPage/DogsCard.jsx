import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import dogs from "./dogs.css";
import { CartContext } from "../../Contexts/CartContext";
const DogsCard = (props) => {
  const { id, name, breed, price, description, imageURL } = props;
  const [isAdded, setAdded] = useState(false);
  const { setAddCart, setTotal, setChoose, choose } = useContext(CartContext);

  const handleClick = () => {
    setAdded(!isAdded);
    const checked = {
      check: isAdded,
    };
    setChoose((chooses) => [...chooses, checked]);
    console.log(choose,"click")
 
    const newItem = {
      name: name,
      price: price,
      imageURL: imageURL,
      id: id,
    };

    setAddCart((item) => [...item, newItem]);

    setTotal((total) => (total += Number(price)));
  };

  useEffect(() => {}, []);
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img src={imageURL} alt={name} className="dog-img" />
        </div>
        <div className="dogs-desc ">{description}</div>
        <div className="dogs-price">{`${price}$`}</div>

        {/* {choose.map((chooses) => {      
        console.log(chooses.check)

          return (     
            chooses.check? (
            
             <>tho1</>):
               ( 
              <>tho2</>
              )
            
          )
        })} */}
        {isAdded ?  (
          <button className="dogs-btn-disabled" onClick={handleClick}>
            ADD
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            ADD TO CARD
          </button>
        )} 
      </section>
    </>
  );
};

export default DogsCard;
