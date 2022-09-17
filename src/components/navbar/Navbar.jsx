import React from "react";
import "./Navbar.scss"
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlinedIcon className="icon"/>
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlinedIcon className="icon" />
						English
					</div>
          <div className="item">
						<DarkModeOutlinedIcon/>
					</div>
          <div className="item">
						<FullscreenExitOutlinedIcon className="icon" />
						
					</div>
          <div className="item">
						<NotificationsNoneOutlinedIcon className="icon" />
						<div className="counter">1</div>
					</div>
          <div className="item">
						<ChatBubbleOutlineOutlinedIcon className="icon" />
						<div className="counter">3</div>
					</div>
          <div className="item">
						<ListOutlinedIcon className="icon" />
						
					</div>
          <div className="item">
						<img className="avatar" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg" alt="" />
						
					</div>
         
					
				</div>
			</div>
		</div>
	);
};

export default Navbar;
