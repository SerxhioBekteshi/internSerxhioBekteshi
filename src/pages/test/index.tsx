import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import onLogin from "../../main/store/stores/user/login.store.on-login"

const TestPage : FC = ()=>
{
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit=()=>
    {
        dispatch(onLogin({userName,password}));
        navigate("/", {replace:true});
    }


    const handleButtonClick=()=> //THJESHT TEST
    {
        // navigate("/jkasfklsdf", {replace:true});
    }

    return(
        <>
            <div>
                <div className="container" style = {{width: "500px", marginTop: "20px"}}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setUserName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <button 
                            onClick={()=>handleSubmit()} 
                            type="submit" 
                            className="btn btn-primary"
                            style = {{ marginRight: "20px"}}
                        >Submit</button>
                        <button onClick={()=>handleButtonClick()} className="btn btn-primary" >redirect</button>
                    </form>
            </div>
            </div>
        </>
    )
}

export default TestPage