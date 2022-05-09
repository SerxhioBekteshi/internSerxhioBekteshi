import React, {FC, useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayPCart from "../../main/components/DisplayPCart";
import BankTransactionManager from "../../main/utils/BankTransactionManager";
import BankAccountManager from "./../../main/utils/bankAccountManager";
import {clearCard} from "../../main/store/stores/card/cardStore";

const ProductToBuy : FC = () =>
{
    const dispatch = useDispatch();
    const [karta, setKarta] = useState([]);
    const {cartItem, total} =  useSelector((state: any) => state.card)
    const [bankAccounts, setbankAccounts] = useState([]);
    const [bankId, setBankId] = useState(59);
    const [purpose, setPurpose] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    // const [showMessage, setShowMessage] = useState(false);
    const [success, setSuccess] = useState("");

    const fetchBankAccounts = async () =>
    {
        const results = await BankAccountManager.getAllBanks();
        setbankAccounts(results.data.data);
    }

    useEffect(() =>
    {
        setKarta(cartItem);
        fetchBankAccounts();
    }, [cartItem]);


    const handleClick = () =>
    {
        const bankTransaction = 
        {
            "bankAccountId": bankId,
            "action": 1,
            "amount": total,
            "description": purpose,
            "isActive": true
        }
        
        BankTransactionManager.addTransaction(bankTransaction)
        dispatch(clearCard());
        // _showMessage.bind(null, true);
        setSuccess("Bleja u krye me sukses");

    }

    const _showComponent = ( (bool: boolean) =>
    {
        setShowComponent(bool)
    });

    // const _showMessage = ( (bool: boolean) =>
    // {
    //     setShowMessage(bool)
    // });

    return (
        <div>
            <div className="wrapper">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="h3">My Cart</div>
                    </div>
                </div>
    
                <div className="table-responsive">
                    <table className="table activitites">
                        <thead>
                            <tr>
                                <th scope="col" className="text-uppercase header">item</th>
                                <th scope="col" className="text-uppercase">Quantity</th>
                                <th scope="col" className="text-uppercase">price each</th>
                                <th scope="col" className="text-uppercase">Remove Item</th>
                                <th scope="col" className="text-uppercase">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {karta.map(kart =>
                            {
                                return (
                                    <DisplayPCart kart = {kart} key = {kart.id}/>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="mb-5">
                    TOTALI PER TU PAGUAR ESHTE {total}
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <button className="ui button blue" onClick={_showComponent.bind(null, true)}>  Buy </button>
                    </div>
                    {showComponent &&  (
                        <div className="col-md-6">
                            <p>Choose bank to pay</p>
                            <select  onChange = { (event) => setBankId(parseInt(event.currentTarget.value))} >
                            {bankAccounts.map(bank => 
                            { 
                                return ( 
                                    
                                    <option value = {bank.id}  key = {bank.id} > {bank.name} </option>
                                );
                            })}
                            </select>
                            <br />
                            
                            <div className="my-3">
                                <label htmlFor="purpose" className="form-label">Purpose of Buy</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="purpose" 
                                    value = {purpose} 
                                    onChange = {(event) => setPurpose(event.target.value)}
                                />
                            </div>

                            <div className="my-3">
                                <button className="btn btn-success" onClick = { () => handleClick() }> Appove Payment </button>
                            </div>

                        </div>
                     )}

                        <div className="my-3">
                            {/* {showMessage && (
                                <div style = {{color:"green", backgroundColor: "lightgreen"}}> Blerja u krye me sukses </div>
                            )}  */}
                            <div style = {{color:"red", backgroundColor: "lightgreen", textAlign: "center"}}> {success} </div>
                        </div> 
                </div>
            </div>
        </div>
    );
}

export default ProductToBuy;