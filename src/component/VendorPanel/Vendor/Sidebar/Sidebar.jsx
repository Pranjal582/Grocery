import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

// icons
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InfoIcon from '@mui/icons-material/Info';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'; //setting

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>

                    <Menu iconShape="circle">
                    <MenuItem onClick={() => navigate("/vendor/vendor-home")}>Dashboard</MenuItem>
                    <MenuItem title="Product Details" icon={<InfoIcon icon={faFile} />} onClick={() => navigate("/vendor/product-details")}> Product Details </MenuItem>
                    <MenuItem title="OrderList" icon={<ShoppingCartCheckoutIcon icon={faFile} />} onClick={() => navigate("/vendor/order-list")}> Orders </MenuItem>
                    <MenuItem title="Complain" icon={<PrivacyTipIcon icon={faFile} />} onClick={() => navigate("/vendor/complain")}> Complaine </MenuItem>
                    <MenuItem title="Commission" icon={<LocalAtmIcon icon={faFile} />} onClick={() => navigate("/vendor/commission")}> Commission </MenuItem>
                    <MenuItem title="Category" icon={<CategoryIcon icon={faFile} />} onClick={() => navigate("/vendor/category")}> Category </MenuItem>
                    <MenuItem title="Users" icon={<PeopleOutlineIcon icon={faFile} />} onClick={() => navigate("/vendor/users")}> Salers List </MenuItem>
                    <MenuItem title="Coupon" icon={<PeopleOutlineIcon icon={faFile} />} onClick={() => navigate("/vendor/coupons")}> Coupons </MenuItem>
                    <MenuItem title="Timing" icon={<PeopleOutlineIcon icon={faFile} />} onClick={() => navigate("/vendor/timing")}> Timeing </MenuItem>
                    <MenuItem title="Support" icon={<PeopleOutlineIcon icon={faFile} />} onClick={() => navigate("/vendor/support")}> Support </MenuItem>

                    <SubMenu title="Inventory Management" icon={<AppSettingsAltIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/vendor/sales-report")}> Sales Report</MenuItem>
                            <MenuItem onClick={() => navigate("/vendor/instoke-purchase")}> Purchases/Stock-in </MenuItem>                      
                            {/* <MenuItem onClick={() => navigate("#")}> Monthly/week/Days Wise Reports </MenuItem>                       */}
                            <MenuItem onClick={() => navigate("/vendor/online-ofline")}> Offline/Online Sales </MenuItem>                      
                                  
                            <MenuItem onClick={() => navigate("/vendor/Details-report")}> Customers & suppliers reports </MenuItem>                      
                            <MenuItem onClick={() => navigate("/vendor/product-alert")}> Product quantity alerts </MenuItem>                      
                            <MenuItem onClick={() => navigate("/vendor/return")}> Returns Customer & Supplier </MenuItem>                      
                            <MenuItem onClick={() => navigate("#")}> Scanner </MenuItem>                      
                    </SubMenu>
                    <SubMenu title="Setting" icon={<AppSettingsAltIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/vendor-profile-update")}>Profile Settings</MenuItem>
                            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>                      
                    </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;