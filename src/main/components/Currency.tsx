import React, {FC, useState, SyntheticEvent} from "react";
import ICurrency from "../interfaces/ICurrency";
import {useNavigate } from "react-router-dom";
import Modali from "../../main/components/Modali";
import "../components/Modal.css";
interface CurrencyProps
{
    currency: ICurrency [];
}

const Currency : FC <CurrencyProps> = (props: any) =>
{
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="card" style={{width: "18rem", height: "330px"}} >

                <div className="card-body">
                    <h5 className="card-title">{props.currency.code} </h5>
                    <p className="card-text">{props.currency.description}</p>
                    <p> Date Created: {props.currency.dateCreated}</p>
                    <p> Date Modified: {props.currency.dateModified}</p>
                    <p> ExchangeRate: {props.currency.exchangeRate}</p>
                                                
                </div>

                <div className="card-footer">
                    <button className="btn btn-success" onClick = { () => { navigate(`/editCurrency/${props.currency.id}`) } }> Edit Currency </button>
                        <button 
                            type="button" 
                            className="btn btn-danger mt-1" 
                            onClick = { () => setShow(true) }
                        > Delete Currency</button>       
                </div>
            </div>

            <Modali 
                show = {show} 
                onClose = { () => setShow(false) } 
                content = {props.currency.code} 
                id = {props.currency.id}
                title = "Currency Delete"
            />

        </div>

    );
}

export default Currency;