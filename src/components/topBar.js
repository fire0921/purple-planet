import React from "react";
// import Button from "@material-ui/core/Button";
import "../css/index.css";
import Logo from "../icon/mobile/logo01_m.png";
import Search from "../icon/mobile/search01_m.png";
import heart02 from "../icon/mobile/heart02_m.png";
import cart02 from "../icon/mobile/cart02_m.png";
//import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const divStyle = {
	fontFamily: "新細明體",
};

class top_Bar extends React.Component {
	render() {
		return (
			<div>
				<div className="TopIcon">
					<div id="logo"><img alt="logo" src={ Logo } border="0" height="67%" width="67%" /></div>
					<div id="search"><img alt="searcher" src={ Search } border="0" height="67%" width="67%"/></div>
					<div id="heart02"><img alt="heart02" src={ heart02 } border="0" height="67%" width="67%"/></div>
					<div id="cart02"><img alt="cart02" src={ cart02 } border="0" height="67%" width="67%"/></div>
				</div>
				<div className="TopBar" style={ divStyle }>
					<div>分類</div>
					<div>揪團跟團</div>
					<div>會員中心</div>
				</div>
			</div>
		);
	}
}

export default top_Bar;

