import styled from "styled-components";

const StyledNavItem = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1.5rem;
	
	&:last-child {
        margin-top: auto;
    }
    
	a, i {
		font-size: 2.7em;
		color: ${(props) => {
			if (!props.enable)
				return ("#CCCCCC");
			else if (props.active)
				return ("#8394F5");
			return ("#2F2F2F");
		}};
		text-decoration: none;
		:hover {
			opacity: ${(props) => props.enable ? 0.7 : 1};
			
		}
	}
`;

export default StyledNavItem;