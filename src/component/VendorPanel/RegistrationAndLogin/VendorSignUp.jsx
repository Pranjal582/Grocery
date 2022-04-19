import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
//css file
import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField,} from "@material-ui/core";

//icons to show & hide th password




const Vendorsignup = (props) => {
    const navigate = useNavigate();

    //Local Lregistration

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleReg = (e) => {
        const info = {
            email: email,
            password: password
        }
        localStorage.setItem('userInfo', JSON.stringify(info));
        navigate("/vendor/vendorLogin")
    }


    //---------------------local state ----------------------

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="Login_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <div >
                        <img style={{ height: "120px", width: "120px" }} src={"sikhlo"} alt="" className="login_image" />
                    </div>
                    <div>
                        <span><h6>Register Account</h6></span>
                      
                    </div>
                    <div className="main_padding_top_bottom">
                        <div className="pb-2">
                            
                         
                        </div>
                        <div className="pb-3">
                            
                            <TextField
                            
                                label="Email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                
                        </div>
                        <div className="pb-3">                            
                            <TextField
                            
                                label="Username"
                                autoComplete="off"
                            />                     
                        </div>
                        <div className="pb-2">                           
                            <TextField
                            type="password"
                                label="Password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="inputfiledformatting mt-2">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={handleReg}
                            >
                               Register
                            </Button>
                        </div>
                        <div className="hover_cursor  mb-3 mt-1" style={{fontSize:"14px"}}>
                        </div>
                        <div className="text-center text-info hover_cursor  mb-3" >
                           Already have an account? <span className="" style={{color:"#7558bf"}} onClick={()=> navigate("/vendor/vendorLogin")}>Login</span>
                        </div>
                    </div>


                </Card>
            </div>

        </>
    );
};

export default Vendorsignup;
