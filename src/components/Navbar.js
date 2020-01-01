
//AiOutlineMenu
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import {
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const MyNavbar = (props) => {
	let [isOpen, setIsOpen] = useState(false);

	let toggle = () => setIsOpen(!isOpen);


	return (
		<div>
			<Navbar  expand="md" fixed="top">
				<AiOutlineMenu color="white" onClick={toggle} />
				<NavbarBrand style={{color: "white"}} href="/"  >Libria</NavbarBrand>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink>Shelves</NavLink>
						</NavItem>
						<NavItem>
							<NavLink >Reception</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default MyNavbar;
