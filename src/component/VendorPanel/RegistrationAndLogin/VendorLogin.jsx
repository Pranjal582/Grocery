import React, { useState, useEffect } from "react";
//css file
import "./Login.css";
//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl, Snackbar } from "@material-ui/core";

//icons to show & hide th password

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useNavigate } from 'react-router-dom';

const VendorLogin = (props) => {
    
    const navigate = useNavigate();

    //local login =====>

    const info = JSON.parse(localStorage.getItem("userInfo"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {

        if(info.email === email && info.password === password){
             navigate("/vendor/vendor-home")
             setOpen(true);
        }else{
            // alert("Please Enter Currect Details")
            setOpen(true);
        }
    }

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //message

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            {/* <CloseIcon fontSize="small" /> */}
          </IconButton>
        </React.Fragment>
      );

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
                        <TextField id="outlined-basic" label="Email" variant="outlined"  value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                        </div>

                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined" >
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password *"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

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
                                onClick={handleLogIn}
                            >
                                Log in
                            </Button>
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

            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Enter Currect Details"
            action={action}
            panelClass={"snackbar_style"}
        />

        </>
    );
};

export default VendorLogin;
