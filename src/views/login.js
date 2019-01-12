import React from "react";
import "../css/index.css";
import Button from "@material-ui/core/Button";
import * as cssLogin from "../css/login_css.js";

class Login extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            phoneNumber: "", 
            screat1:"",
            screat2:"",
        };
    }
    handleChange(event) {
        if(event.target.className === "phoneNumber"){
            this.setState({
                phoneNumber: event.target.value.substr(0, 140),
            });      
        }else if(event.target.className === "screat1"){
            this.setState({
                screat1: event.target.value.substr(0,40),
            })
        }else if(event.target.className === "screat2"){
            this.setState({
                screat2: event.target.value.substr(0,40),
            })
        }else{
            console.log("handleChange has bug !!");
            alert("請通知管理員處理!!")
        }
    };
    handleSubmit(event){
        const phone = this.state.phoneNumber;
        const screat1 = this.state.screat1;
        const screat2 = this.state.screat2;

        event.preventDefault();

        if(phone === ""){
            alert("請輸入手機號碼!!!");
        }else if(phone.length !== 10){
            alert("請輸入正確的手機號碼");
        }else if(phone[0] !== "0" && phone[1] !== "9"){
            alert("請輸入正確的手機號碼");
            console.log("開頭錯誤");
        }else if(screat1 !== screat2){
            alert("與原輸入的密碼不同!!!");
        }else if(screat1 === ""){
            alert("請輸入密碼!!!!");
        }else if(screat1.length < 8 && screat2.length < 8){
            alert("密碼長度必須至少八位!!");
        }else{
            alert("正確,即將跳轉頁面!!!");
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h1 style={cssLogin.styleForH1}>會員登入 / 註冊</h1>
                    <div className="Phone">
                        <input className="phoneNumber" style={ cssLogin.style("80%") } type="text"  placeholder="請輸入手機號碼" value={ this.state.phoneNumber } onChange={ (i) => this.handleChange(i) } />
                    </div>
                    <div className="Password" style={ cssLogin.stylePass }>
                        <input className="screat1" style={ cssLogin.style("50%","10%") } type="text"  placeholder="請輸入密碼" value={ this.state.screat1 } onChange={ (i) => this.handleChange(i) } />
                        <Button variant="contained" style={ cssLogin.ButtonCss } className="login"  onClick={() => console.log("test")}>登入</Button>
                    </div>
                    <div style={ cssLogin.aligntCenter }>
                        <p>(會員輸入密碼登入)</p>
                    </div>
                    <div className="Password" style={ cssLogin.stylePass }>
                        <input className="screat2" style={ cssLogin.style("50%","5%") } type="text"  placeholder="再次確認密碼" value={ this.state.screat2 } onChange={ (i) => this.handleChange(i) } />
                        <Button variant="contained" style={ cssLogin.ButtonCss } className="login"  onClick={(i) => this.handleSubmit(i) }>註冊</Button>
                    </div>
                    <div style={ cssLogin.aligntCenter }>
                        <p>(新會員再次確認密碼註冊)</p>
                    </div>
                    <div className="forgetPws" style={ cssLogin.forgetPsw() }>
                        <label style={ cssLogin.forgetPsw("25px","#750075","10px") }>忘記密碼</label>
                        <label style={ cssLogin.label } className="container">記住我
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div style={ cssLogin.splitLine }>--------------------------------------------------------------</div>
                </div>
                <div align="center">
                    <Button variant="contained" style={ cssLogin.FbButtonCss } className="FBlogin"  onClick={() => console.log("test")}>FB登入</Button>
                </div>
            </div>
        )}
}

export default Login;
