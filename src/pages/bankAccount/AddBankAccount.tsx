import React, {FC, useState} from "react";
import BankAccountManager from "../../main/utils/bankAccountManager";
import {useNavigate} from "react-router-dom";

const AddBankAccount : FC = () =>
{
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [currencyId, setCurrencyId] = useState("");
    const [balance, setBalance] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        await BankAccountManager.addBank({code, name, currencyId, balance });
        navigate("/bankAccounts");
    }

    return (
        <div>
            <div className="container" style ={{width: "300px"}}>

                <form onSubmit = {(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label"> Code </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="code" 
                            value = {code} 
                            onChange = {(event) => setCode(event.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"> Name </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"  
                            value = {name} 
                            onChange = {(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="currencyId" className="form-label"> Currency Id</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="currencyId" 
                            value = {currencyId} 
                            onChange = {(event) => setCurrencyId(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="balance" className="form-label"> Balance </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="balance" 
                            value = {balance} 
                            onChange = {(event) => setBalance(parseInt(event.target.value))}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
    );
};

export default AddBankAccount;