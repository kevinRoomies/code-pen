import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Box from "./components/Box";
import SideNavBar from "./components/SideNavBar";
import LoginPage from "./pages/LoginPage";
import CompanyPage from "./pages/CompanyPage";
import PDFTron from "./components/PDFTron";

class App extends Component {
	render() {
		return (
			<Box style={{width: "99.6vw", height: "95.6vh"}}>
				<Router>
					<SideNavBar/>
					<Switch>
						<Route exact path={"/"} render={() => <Redirect to={"/login"}/>}/>
						<Route path={"/login"} component={LoginPage}/>
						<Route path={"/company"} component={CompanyPage}/>
						<ProtectedRoute path={"/pdftron"} component={PDFTron}/>
					</Switch>
				</Router>
			</Box>
		);
	}
}

export default App;
