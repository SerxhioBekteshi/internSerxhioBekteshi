import React, {FC, useEffect, useState} from "react";
import CurrencyManager from "../../main/utils/currencyManager";
import { useParams, useNavigate } from "react-router-dom";

const EditCurrency :FC  = () =>
{
    const navigate = useNavigate();

    let { id } = useParams();
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);

    const fetchCurrency = async (id: number) =>
    {
        const results = await CurrencyManager.getUniqueCurrency(id);
        setCode(results.data.code);
        setDescription(results.data.description);
        setRate(results.data.exchangeRate);
    }

    useEffect( () => 
    {
        fetchCurrency(parseInt(id));
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        await CurrencyManager.editCurrency(parseInt(id), {code,description,rate});
        navigate("/currencies");
    }

    return(
        <div>
            <div className="container" style = {{width: "300px"}}> 
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

                    <input type="submit" className="btn btn-primary" value = "Edit" /> 

                </form>
            </div>
        </div>
    );
};

export default EditCurrency;