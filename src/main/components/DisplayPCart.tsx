import React, {FC, useEffect, useState} from "react";
import "./stilimiCart.css";
import IBuyProduct from "../../main/interfaces/IBuyProduct";
import {useDispatch} from "react-redux";
import {removeItem, incrementItem, decrementItem} from "../../main/store/stores/card/cardStore";

interface ProductCartProps
{
    kart: IBuyProduct [];
}

const DisplayPCart : FC<ProductCartProps> = (props: any) =>
{
    const dispatch = useDispatch();
    const [totaliPerCdoProdukt, setTotaliPerCdoProdukt] = useState(0);

    useEffect( () =>
    {
        setTotaliPerCdoProdukt(props.kart.quantity * props.kart.price);
    }, [props.kart.quantity]);

    return (
        <> 
        <tr>
            <td className="item">
                <div>
                    {/* <img src="https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""/> */}
                    <div className="pl-2">
                        {props.kart.name}
                    </div>
                </div>
            </td>

            <td>
                <button className="btn btn-success mx-2" onClick = {() => dispatch(incrementItem(props.kart)) }> + </button>
                <button className="btn btn-danger mx-2" onClick = {() => dispatch(decrementItem(props.kart))}> - </button>
                 <p style={{color: "blue"}}> {props.kart.quantity} </p>
            </td>

            <td>
                <span className="red"> {props.kart.price} </span>
            </td>

            <td>
                <button onClick = {() => dispatch(removeItem(props.kart)) } className="btn btn-info" type="button"> Remove Item </button>
            </td>

            <td className="font-weight-bold">
                {totaliPerCdoProdukt}
            </td>
        </tr>
        </>
    )
          
}

export default DisplayPCart;