import React, {FC, useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import CurrencyManager from "../../main/utils/currencyManager";
import Currency from "../../main/components/Currency";

const Currencies: FC = () =>
{
    const [currencies, setCurrency] = useState([]);
    const navigate = useNavigate();

    const fetchCurrencies = async () =>
    {
        const results = await CurrencyManager.getAllCurrencies();
        setCurrency(results.data.data);
    }

    useEffect( () => 
    {
        fetchCurrencies();
    }, []);

    const handleAddCurrency = () =>
    {
        navigate("/addCurrency", {replace:true});
    }

    return (
        <div>
            <div className="row mx-1">
                <h2 className="text-center"> ALL CURRENCIES </h2>
                {currencies.map(currency => 
                    {
                        return (
                            <div className="col-md-2" key = {currency.id}> 
                                <Currency currency = {currency} />
                            </div>
                        );
                    })}
                </div>

                <button onClick = {() => handleAddCurrency()} type = "button" className="btn btn-info mt-5 mx-1"> ADD CURRENCY </button>

        </div>
    );
};

export default Currencies;