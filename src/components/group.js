import React from "react";
import Reactdom from "react-dom";
import * as cssGroup from "../css/group_css.js";

const requireContext = require.context("./product",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

function Test(){
    const imgArray = [];
    projectImgs.forEach((e, index) => {
        imgArray.push(<div key={index} style= { cssGroup.img1 }><img src={e} border="0" height="100%" width="100%" /></div>)
    })
    return(
        <div>{ imgArray }</div>
    );
}

class Group extends React.Component {
    render(){
        return(
            <Test />
        )
    }
}
export default Group;
