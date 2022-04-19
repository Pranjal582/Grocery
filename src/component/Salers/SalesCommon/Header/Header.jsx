import React, { useState } from 'react';
//material ui appbar
import { AppBar, Toolbar } from "@material-ui/core";
//css file
import "./Header.css";
import { useNavigate } from 'react-router-dom';


const img = "https://images.picxy.com/cache/2020/11/18/aeef82200f0f9e7b023b39067d168162.jpg"
// const img = "https://i.pinimg.com/564x/8c/03/c6/8c03c6c53fe3cc22116896ec9c43ffb2.jpg"

const Header = (props) => {
    const navigate = useNavigate();


    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                        
                    <div className="d-flex">
                    <span className='pr-3'><img src={img} alt="" height="50" width='50'
                     style={{borderRadius:"999px", objectFit: "cover", cursor: "pointer" }} 
                      /></span>
                        <span className='pr-2 mt-1' style={{color:"#b0dd36"}}><h4>Salers Panel</h4></span>
                        <span className="toggle_button_sidebar mt-2">
                                <i className="fa fa-bars mr-2"
                                onClick={() => {
                                props.setLoading();
                            }}>
                            </i></span>
                    </div>

                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="d-flex " >
           
           

                            <div className="dropdown ">
                                <div data-toggle="dropdown">  <i className="fa fa-power-off mt-2" style={{fontSize:"23px"}} aria-hidden="true"></i>
                                </div>
                                <div className="dropdown-menu animate slideIn dopdown_formatting">
                                    <div className="dropdownLinks p-2" onClick={() => navigate("/change-password")}>
                                        <span><i className="fa fa-cog mr-3" />Change Password</span>
                                    </div>
                                    <hr />
                                    <div className="dropdownLinks p-2 mt-1" onClick={() => navigate("/login")}>
                                        <span><i className="fa fa-sign-out mr-3" />LogOut</span>
                                    </div>

                                </div>
                            </div>
                        </span>

                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i className="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    className="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <div className="text-center">
                                {/* <img src={sikhlo} alt="" /> */}
                            </div>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/sales-panel")}>
                                Dashboard
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/sales/uploadDoc")}>
                                Documents Upload
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/sales/history")}>
                               History
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/sales-panel")}>
                              Notification
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/sales/selers-documents")}>
                               Documents
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Log Out
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
