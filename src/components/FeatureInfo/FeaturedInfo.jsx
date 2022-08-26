import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";

const FeaturedInfo = () => {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2,231</span>
					<span className='featuredMoneyRate'>
						-11.67 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month </span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2,445</span>
					<span className='featuredMoneyRate'>
						-11.67 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month </span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2,897</span>
					<span className='featuredMoneyRate'>
						1.67 <ArrowUpward className='featuredIcon' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month </span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
