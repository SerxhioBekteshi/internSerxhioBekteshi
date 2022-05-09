import React, {useState, FC, useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavCart : FC = () =>
{

    const [NrOfProducstInCart, setNrOfProducstInCart] = useState(0);
    const {cartItem} =  useSelector((state: any) => state.card)
    const navigate = useNavigate();

    useEffect(() =>
    {
        setNrOfProducstInCart(cartItem.length);

    }, [cartItem.length])

    return(
        <div>
             <div className="row" > 
                <div className="col-md-12 mb-3" style = {{textAlign: "center"}}>
                    <nav> 
                        <div className="nav_box">
                            <span className="my_shop"> My Shopping Cart </span>
                            <div className="cart">
                                <span>
                                    <i onClick = { () => navigate("/ProductToBuy")} className="fas fa-cart-plus"></i>
                                </span>
                                <span > {NrOfProducstInCart} </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavCart;