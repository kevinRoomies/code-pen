import styled from "styled-components";

const Box = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction === undefined ? "row" : props.direction};
	justify-content: ${(props) => props.justify === undefined ? "flex-start" : props.justify};
	align-items: ${(props) => props.align === undefined ? "flex-start" : props.align};
	flex: ${(props) => props.flex === undefined ? "1" : props.flex};
	height: 100%;
	width: 100%;
`;

export default Box;