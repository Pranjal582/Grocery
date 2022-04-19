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
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import BarChartIcon from '@mui/icons-material/BarChart';
import PercentIcon from '@mui/icons-material/Percent';

import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'; //setting

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                    <MenuItem onClick={() => navigate("/admin")}>Dashboard</MenuItem>
                    <MenuItem title="Daily Request (booking)" icon={<ShoppingCartCheckoutIcon icon={faFile} />} onClick={() => navigate("/daily-request-booking")}> Daily Request(Booking) </MenuItem>
                    <MenuItem title="Vendors" icon={<InterpreterModeIcon icon={faFile} />} onClick={() => navigate("/vendor")}> Vendors </MenuItem>
                    <MenuItem title="DeliveryPartner" icon={<SupervisorAccountIcon icon={faFile} />} onClick={() => navigate("/delivery-partner")}> Delivery Partner </MenuItem>
                    <MenuItem title="create-discount" icon={<PercentIcon icon={faFile} />} onClick={() => navigate("/create-discount")}> Create Discount </MenuItem>
                    <MenuItem title="banner" icon={<ViewCarouselIcon icon={faFile} />} onClick={() => navigate("/banner")}> Banner </MenuItem>
                    <MenuItem title="Statistics" icon={<BarChartIcon icon={faFile} />} onClick={() => navigate("/product-statistics")}> Product Order Statistics. </MenuItem>
                    <MenuItem title="Push Notification" icon={<BarChartIcon icon={faFile} />} onClick={() => navigate("/notification")}>Push Notification </MenuItem>
                   
                    <SubMenu title="Setting" icon={<AppSettingsAltIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("/admin-profile-update")}>Profile Settings</MenuItem>
                            <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>                      
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;