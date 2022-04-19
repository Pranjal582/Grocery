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


import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'; //setting

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>

                    <Menu iconShape="circle">
                    <MenuItem onClick={() => navigate("/sales-panel")}>Dashboard</MenuItem>
                    <MenuItem title="Uploads Documents" icon={<InfoIcon icon={faFile} />} onClick={() => navigate("/sales/uploadDoc")}> Uploads Documents ( Seller ) </MenuItem>
                    <MenuItem title="History" icon={<ShoppingCartCheckoutIcon icon={faFile} />} onClick={() => navigate("/sales/history")}>History</MenuItem>
                    <MenuItem title="Notification" icon={<PrivacyTipIcon icon={faFile} />} onClick={() => navigate("/sales-panel")}> Notification </MenuItem>
                    <MenuItem title="Documents" icon={<LocalAtmIcon icon={faFile} />} onClick={() => navigate("/sales/selers-documents")}> Documents </MenuItem>

                    <SubMenu title="Setting" icon={<AppSettingsAltIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/sales/profile")}>Profile Settings</MenuItem>
                            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>                      
                    </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;