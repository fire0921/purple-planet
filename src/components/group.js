import React from "react";
import * as cssGroup from "../css/group_css.js";
import Button from "@material-ui/core/Button";
const requireContext = require.context("./product",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

function Test(){
    const imgArray = [];
    projectImgs.forEach((e, index) => {
        const fileName = e.split("/");
        imgArray.push(
            <div key={index}>
                <div style= { cssGroup.img1 }>
                    <img alt={ index }src={e} border="0" height="100%" width="100%" />
                    <div style={cssGroup.price}>
                        <div>
                            <div style={ cssGroup.fontSizeFun("120%")}>L0008</div>
                            <div style={ cssGroup.fontSizeFun("120%")}>牛軋糖 300g/包</div>
                            <div className="Price" style= { cssGroup.price2 }>
                                <div className="originPrice" style={ cssGroup.originPrice }>原價$200 </div>
                                <div className="salePrice" style= { cssGroup.salePrice }>售價$180 </div>
                           </div>
                           <div className="priceGroup" style= { cssGroup.price2 }>
                                <div style={cssGroup.groupPrice}>成團量10包 </div>
                                <div style= { cssGroup.groupPrice }>團購價$180</div>
                           </div>
                       </div>
                       <div className="buyButton" style={ cssGroup.buyButton }>
                           <Button variant="contained" style={ cssGroup.Buy } onClick={() => console.log(fileName.slice(-1))}>購買</Button>
                           <Button variant="contained" style={ cssGroup.Buy } onClick={() => console.log(window.screen.width)}>揪團</Button>
                       </div>
                    </div>
                </div>
           </div> 
        )
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
