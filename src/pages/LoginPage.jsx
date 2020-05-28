import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, FilledInput} from '@material-ui/core';
import LoginPageContainer from "./StyledLoginPage";
import logo from "../assets/images/logo.png"

class LoginPage extends Component {
    render() {
        const {dispatch} = this.props;

        return (
            <LoginPageContainer>
                <img src={logo} alt={""} height={"350rem"}/>
                <FilledInput placeholder={"Login or email"}/>
                <FilledInput placeholder={"Password"}/>
                <Button onClick={() => dispatch({ type: "SIGN_IN" })}>
                    Sign in
                </Button>
            </LoginPageContainer>
        );
    }
}

export default connect(null, null)(LoginPage);