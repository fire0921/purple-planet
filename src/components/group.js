import React from "react";
import * as cssGroup from "../css/group_css.js";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";

const requireContext = require.context("./product",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

function Test(props){
	const imgArray = [];
	projectImgs.forEach((e, index) => {
		const fileName = e.split("/");
		imgArray.push(
			<div key={index}>
				<div style= { cssGroup.img1 }>
					<img alt={ index } src={e} border="0" height="100%" width="100%" />
					<div style={cssGroup.price}>
						<div>
							<div style={ cssGroup.fontSizeFun("120%")}>L0008</div>
							<div style={ cssGroup.fontSizeFun("120%")}>牛軋糖 300g/包</div>
							<div className="Price" style= { cssGroup.price2 }>
								<ul className="PriceList"  style={ cssGroup.ulStyle("1px 0 0 0 ") }>
									<li className="originPrice" style= { cssGroup.deleteLine }>原價$200 </li>
									<li className="salePrice" style= { cssGroup.liStyle("3%") }>售價$180 </li>
								</ul>
								<ul style={ cssGroup.ulStyle("1px 0 0 0") }>
									<li style= { cssGroup.liStyle("0") } >成團量10包</li>
									<li style= { cssGroup.liStyle("3%") } >團購價$180</li>
								</ul>
							</div>
						</div>
						<div className="buyButton" style={ cssGroup.buyButton }>
							<Button variant="contained" style={ cssGroup.Buy } onClick={() => console.log(fileName.slice(-1))}>購買</Button>
							<Button variant="contained" style={ cssGroup.Buy } onClick={() => console.log(props)}>揪團</Button>
						</div>
					</div>
				</div>
			</div> 
		);
	});
	return(
		<div>{ imgArray }</div>
	);
}

class Group extends React.Component {
	componentDidMount(){
		console.log("Did monut");
		console.log(Cookies.get());
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");
		console.log(nextProps);
	}
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");
	}
	render(){
		return(
			<Test{ ...this.props } />
		);
	}
}

export default Group;
