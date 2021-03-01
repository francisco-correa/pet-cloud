import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import HomeNavInfo from "./homeNavInfo";

export const MyNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="petCloudBar" variant="light">
			<Navbar.Brand href="#home">
				<Link to="/">
					<img
						className="logo"
						src="https://raw.githubusercontent.com/NicolasArayaB/pet-cloud/navbar/src/front/img/petcloudlogo.png"
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
				<HomeNavInfo />
			</Navbar.Collapse>
		</Navbar>
	);
};
