import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import NavItem from "./NavItem";
import navItems from "../config/navItems.json";
import SideNavBarContainer from "./StyledSideNavBar";

class SideNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPath: props.location.pathname,
		};
	}

	onClick (path) {
		this.setState({currentPath: path});
	}

	render() {
		const {currentPath} = this.state;

		if (this.props.location.pathname === "/login")
			return(<></>);
		return(
			<SideNavBarContainer> {
				navItems.map((item, index) => {
					return (
						<NavItem
							item={item}
							active={item.path === currentPath}
							onClick={this.onClick.bind(this)}
							key={index}
						/>
					);
				})
			}
			</SideNavBarContainer>
		);
	}
}

export default withRouter(SideNavBar);