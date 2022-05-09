import React, {FC, useState} from "react";
import CurrencyManager from "../../main/utils/currencyManager";
import {useNavigate} from "react-router-dom";


const AddCurrency : FC = () =>
{
    const [code, setCode] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        await CurrencyManager.addCurrency({code, date, description, rate });
        navigate("/currencies");
    }

    return (
        <div>
            <div className="container" style ={{width: "300px"}}>

                <form onSubmit = {(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">CODE </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="code" 
                            value = {code} 
                            onChange = {(event) => setCode(event.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">DATE </label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="date"  
                            value = {date} 
                            onChange = {(event) => setDate(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">DESCRIPTION</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            value = {description} 
                            onChange = {(event) => setDescription(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exchangeRate" className="form-label">Exchange Rate</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exchangeRate" 
                            value = {rate} 
                            onChange = {(event) => setRate(parseInt(event.currentTarget.value))}
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
    );
};

export default AddCurrency;