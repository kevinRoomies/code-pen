import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {connectProtectedRoute as connect} from "../redux/connectProtectedRoute";

class ProtectedRoute extends Component {
	render() {
		const {isLogged, component} = this.props;
		console.log(this.props);
		return (
			<Route render={
				() => {
					if (isLogged)
						return (component);
					else
						return (<Redirect to={"/login"}/>);
				}
			}/>
		);
	}
}

ProtectedRoute.propTypes = {
	component: PropTypes.elementType.isRequired
};

export default connect(ProtectedRoute);