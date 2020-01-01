import React, { Component } from 'react'
import vias_data from "../data/vias.json"
import ViaList from "../components/ViaList.js"
import MyNavbar from "../components/Navbar.js"
import "../styles/grado_styling.css"

export default class ListAllVias extends Component {
	constructor() {
		super();
		this.state = {
			vias: []
		}
	}

	componentDidMount() {
		let vias_array = []
		for (const via in vias_data.LaCabrera) {
			const element = vias_data.LaCabrera[via];
			vias_array.push(<ViaList key={element.nombre} bundle={element} />)
		}
		this.setState({ vias: vias_array })
	}


	render() {
		return (
			<div className="gradoTemplate_wrapper">
				<MyNavbar />
				<h3>Lista de Vías</h3>
				<div className="gradoTemplate_vias_wrapper">
					{this.state.vias}
				</div>
			</div>
		)
	}
}
