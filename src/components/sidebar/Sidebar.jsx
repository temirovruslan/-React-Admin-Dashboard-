import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			<div className="top">
			<div className="bottom">
				<div className="color-option"  onClick={() => dispatch({ type: "LIGHT" })}></div>
				<div className="color-option" onClick={() => dispatch({ type: "DARK" })}></div>
			</div>
			</div>
			<hr />
			<div className="center">
				<ul className="center-list">
					<p className="title">MAIN</p>
					<Link to="/">
					<li>
						<DashboardIcon className="sidebar-icon" />
						<span className="sidebar-text">Dashboard</span>
					</li>
					</Link>
					<p className="title">LIST</p>

					<Link to="/users">
						<li>
							<AccountCircleOutlinedIcon className="sidebar-icon" />
							<span className="sidebar-text">User</span>
						</li>
					</Link>
					<Link to="/products">
					<li>
						<ProductionQuantityLimitsOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Products</span>
					</li>
					</Link>
					
					<li>
						<ShoppingCartOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Orders</span>
					</li>
					<li>
						<OtherHousesOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Status</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<NotificationsActiveOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Notification</span>
					</li>
					<li>
						<HealthAndSafetyOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">System Health</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Delivery</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<HubOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Settings</span>
					</li>
					<p className="title">PROFILE</p>
					<li>
						<InsertEmoticonOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Profile</span>
					</li>
					<li>
						<LoginOutlinedIcon className="sidebar-icon" />
						<span className="sidebar-text">Log out</span>
					</li>
				</ul>
			</div>
			
		</div>
	);
};

export default Sidebar;
