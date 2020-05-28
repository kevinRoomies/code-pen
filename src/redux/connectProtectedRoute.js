import {connect} from "react-redux";

function mapStateToProps(state) {
	return ({
		isLogged: state.isLogged
	});
}

export const connectProtectedRoute = connect(mapStateToProps, null);