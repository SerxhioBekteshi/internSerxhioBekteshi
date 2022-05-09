import React, {FC} from "react";
import IBankAccount from "../interfaces/IBankAccount";
import {useNavigate} from "react-router-dom";
import BankAccountManager from "../utils/bankAccountManager";

interface BankAccountProps
{
    bankAccount: IBankAccount [];
}

const BankAccount : FC<BankAccountProps> = (props: any) =>
{
    const navigate = useNavigate();

    const handleDelete = async ()  =>
    {
        await BankAccountManager.deleteBank(props.bankAccount.id)
        window.location.reload();
    }

    if(props.bankAccount == null)
        return null;
    
    return (
        <>
            <tr>
                <td> {props.bankAccount.code} </td>
                <td> {props.bankAccount.name}</td>
                <td> {props.bankAccount.currencyId}</td>
                <td> {props.bankAccount.balance} </td>
                <td> <button type = "button" className="btn btn-success" onClick={ () => { navigate(`/EditBankAccount/${props.bankAccount.id}`)} }> Edit  </button></td>
                <td> <button type = "button" className="btn btn-danger" onClick={ () => handleDelete() }> Delete  </button></td>
            </tr>
        </>
    );
}

export default BankAccount;