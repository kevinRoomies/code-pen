import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import NavItemContainer from "./StyledNavItem";

class NavItem extends Component {

	render() {
		const { item, active, onClick } = this.props;
		return(
			<NavItemContainer active={active} enable={item.enable}>
				{
					item.enable &&
					<Link to={item.path} className={item.icon} onClick={() => onClick(item.path)} title={item.name}/>
				}
				{
					!item.enable &&
					<i className={item.icon} title={item.name + (" (unavailable)")}/>
				}
			</NavItemContainer>
		);
	}
}

NavItem.propTypes = {
	item: PropTypes.object.isRequired,
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default NavItem;