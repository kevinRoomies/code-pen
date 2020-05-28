const companyReducer = (state = null, action) => {
	switch (action.type) {
		case "SET_COMPANY": return action.payload;
	}
}

export default companyReducer;