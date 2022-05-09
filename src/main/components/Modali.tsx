import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import IModali from "../../main/interfaces/IModali";
import CurrencyManager from "../utils/currencyManager";
 
const Modali : FC<IModali> = (props: IModali) => 
{
    const { onClose, show, content, id, title} = props;

    const navigate = useNavigate();
    // if(!show)
    // {
    //     return null;
    // }

    const handleDelete = async () =>
    {
        await CurrencyManager.deleteCurrency(id);
        window.location.reload();
    }

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick = { props.onClose } >
            <div className="modal-content" onClick = {e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title"> {title}</h4>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete the currency {content} ?
                </div>
                <div className="modal-footer">
                    <button onClick = { props.onClose } className="btn btn-info"> Close </button>
                    <button onClick = { ()=> handleDelete() } className="btn btn-danger" > Delete  </button>
                </div>
            </div>
        </div>
    );
};

export default Modali;