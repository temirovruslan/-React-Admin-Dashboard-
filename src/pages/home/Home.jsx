import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./Home.scss";
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user"/>
					<Widget type="order"/>
					<Widget type="earning"/>
					<Widget type="balance"/>
				</div>
        <div className="charts">
			
			<Featured/>
			<Chart/>
        </div>
			</div>
		</div>
	);
};

export default Home;
