import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./Home.scss";
import Chart from "../../components/chart/Chart";
// import Table from '../../components/table/List'
import Featured from "../../components/featured/Featured";
import List from "../../components/table/List";
// import '../../style/dark.scss'

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart />
				</div>
				<div className="listContainer">
					<div className="listTitle">
						<List/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
