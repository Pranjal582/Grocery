import React, { useState, useEffect } from "react";
//css file
import "./Login.css";
//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { Link, useNavigate } from 'react-router-dom';

const DPLogin = (props) => {
    const navigate = useNavigate();

    //local login =====>
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);


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
                        <span><h6>Welcome!</h6></span>                   
                    </div>
                    <div className="main_padding_top_bottom">
                        <div className="pb-2">            
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined" >
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password *"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                              autoComplete="off"
                                                aria-label="toggle password visibility"
                                                onClick={() => setshowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className="inputfiledformatting mt-2">
                            <Button
                                variant="contained"
                                className="Login_page_button"
                                onClick={() => navigate("/admin")}
                            >
                                Log in As Admin
                            </Button>
                        </div>

                        
                        <div className="vendor">
   

                                <div className="inputfiledformatting mt-2 lbtn ">
                                    <Button
                                        variant="contained"
                                        className="Login_page_button"
                                        onClick={() => navigate("/vendor/registration")}
                                    >
                                        Vendor
                                    </Button>
                                </div>
                                <div className="inputfiledformatting mt-2 lbtn">
                                    <Button
                                        variant="contained"
                                        className="Login_page_button"
                                        onClick={() => navigate("/sales-login")}
                                    >
                                        Salers Login
                                    </Button>
                                </div>
                        </div>

                        <div className="text-info hover_cursor  mb-3" >
                            <Link to='/forgotpassword' >
                            Forgot Password?
                            </Link>                 
                        </div>
                        <div className="text-center text-info hover_cursor  mb-3" >
                           Don't have an account? <span className="" style={{color:"#7558bf"}} onClick={()=> navigate("/vendor/registration")}>Register</span>
                        </div>
                    </div>

                </Card>
            </div>

        </>
    );
};

export default DPLogin;
