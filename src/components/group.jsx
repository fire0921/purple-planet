import React from "react";
import * as cssGroup from "../css/group_css.js";
import Fab from "@material-ui/core/Fab";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Immutable from "immutable";
import CircularProgress from "@material-ui/core/CircularProgress";

class Group extends React.Component {
	constructor(props) {
		super(props);
		this.groupScroll = React.createRef();
		this.checkScrollHeight = this.checkScrollHeight.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			prevPropsObj: this.props
		};
	}

	checkScrollHeight() {
		let pageHeight = this.groupScroll.current.scrollHeight;
		let viewportHeight = this.groupScroll.current.clientHeight || 0;
		let scrollHeights = this.groupScroll.current.scrollTop || 0;
		let offsetToBottom = pageHeight - viewportHeight - scrollHeights;
		if (!this.props.complete && !this.props.loading && offsetToBottom <= 20) {
			this.props.getGroupMoreData({ page: this.props.page });
		}
	}

	handleScroll(node) {
		node.addEventListener("scroll", this.checkScrollHeight);
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.props.getGroupMoreData({ page: this.props.page });
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		if (!Immutable.is(nextProps, prevState.prevPropsObj)) {
			return { prevPropsObj: nextProps };
		} else {
			return null;
		}
	}
	getSnapshotBeforeUpdate(prevProps) {
		if (!Immutable.is(this.props, prevProps)) {
			return true;
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot) {
			this.handleScroll(this.groupScroll.current);
		}
	}

	render() {
		//var projectImgSlice = projectImgs.slice(0, this.props.page);
		const datas = this.props.group_data;
		const imgArray = [];
		if (datas) {
			this.props.group_data.forEach((e, index) => {
				imgArray.push(
					<div key={index}>
						<div style={cssGroup.img1}>
							<img alt={index} src={e} border="0" height="100%" width="100%" />
							<div style={cssGroup.price}>
								<div>
									<div style={cssGroup.fontSizeFun("100%")}>L0008</div>
									<div style={cssGroup.fontSizeFun("100%")}>牛軋糖 300g/包</div>
									<div className="Price" style={cssGroup.price2}>
										<ul
											className="PriceList"
											style={cssGroup.ulStyle("1px 0 0 0 ")}
										>
											<li className="originPrice" style={cssGroup.deleteLine}>
												原價$200{" "}
											</li>
											<li className="salePrice" style={cssGroup.liStyle("3%")}>
												售價$180{" "}
											</li>
										</ul>
										<ul style={cssGroup.ulStyle("1px 0 0 0")}>
											<li style={cssGroup.liStyle("0")}>成團量10包</li>
											<li style={cssGroup.liStyle("3%")}>團購價$180</li>
										</ul>
									</div>
								</div>
								<div className="buyButton" style={cssGroup.buyButton}>
									<Fab
										size="large"
										aria-label="Add"
										style={cssGroup.Buy("5%", "2%")}
										onClick={() =>
											this.props.history.push("/group/groupDetail/1234")
										}
									>
										揪團
									</Fab>
									<Fab
										size="large"
										aria-label="Add"
										style={cssGroup.Buy("10%", "2%")}
										onClick={() =>
											this.props.history.push("/group/groupDetail/1234")
										}
									>
										購買
									</Fab>
								</div>
							</div>
						</div>
					</div>
				);
			});
		}
		return (
			<div>
				<div
					className="groupApp"
					ref={this.groupScroll}
					style={{ height: "-webkit-fill-available", overflow: "auto" }}
				>
					{imgArray}
				</div>
				<div className="isLoading">
					{this.props.loading ? <CircularProgress /> : ""}
				</div>
			</div>
		);
	}
}

Group.propTypes = {
	page: PropTypes.number,
	loading: PropTypes.bool,
	complete: PropTypes.bool,
	getGroupMoreData: PropTypes.func,
	group_data: PropTypes.object,
	history: PropTypes.object
};

export default withRouter(Group);
