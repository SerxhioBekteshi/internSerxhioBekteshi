import react, {FC} from "react";
import {Link} from "react-router-dom"

const Menu : FC = () =>
{
    
    return(
        <div className="mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
                <Link to = "/" className="nav-link"> HOME / DASHBOARD </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="currencies"> Currencies </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="bankAccounts"> BANK ACCOUNTS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menu;