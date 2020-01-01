import { withRouter} from "react-router-dom"
//AiOutlineMenu
import React, { useState } from 'react';
import { TiArrowBack } from "react-icons/ti"
import {
	Navbar,
} from 'reactstrap';

const MyNavbar = (props) => {
	let [isOpen, setIsOpen] = useState(false);

	let toggle = () => setIsOpen(!isOpen);


	return (
		<div>
			<Navbar  expand="md" fixed="top">
				<TiArrowBack color="white"onClick={() => { props.history.push("/home")}} fontSize="1.5rem" />
			</Navbar>
		</div>
	);
}

export default withRouter(MyNavbar);
