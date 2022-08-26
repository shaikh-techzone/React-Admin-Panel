import React from "react";
import Chart from "../../components/Charts/Chart";
import FeaturedInfo from "../../components/FeatureInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

const Home = () => {
	return (
		<div className='home'>
			<FeaturedInfo />
			<Chart
				data={userData}
				title='User Analytics'
				grid
				dataKey='Active User'
			/>
			<div className='homeWidgets'>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
