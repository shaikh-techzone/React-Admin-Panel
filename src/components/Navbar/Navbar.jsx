import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Navbar = () => {
	return (
		<div className='Navbar'>
			<div className='navbarWrapper'>
				<div className='navleft'>
					<span className='logo'>SHAIKH ADMIN</span>
				</div>
				<div className='navright'>
					<div className='nav-icon-container'>
						<NotificationsNone />
						<span className='nav-icon-badge'>2</span>
					</div>
					<div className='nav-icon-container'>
						<Language />
						{/* <span className='nav-icon-badge'>2</span> */}
					</div>
					<div className='nav-icon-container'>
						<Settings />
						{/* <span className='nav-icon-badge'>2</span> */}
					</div>
					<img
						src='https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=srgb&dl=pexels-tara-winstead-8386440.jpg&fm=jpg'
						alt=''
						className='nav-avatar'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
