import React, { Component } from 'react'
import vias_data from "../data/vias.json"
import ViaList from "../components/ViaList.js"
import MyNavbar from "../components/Navbar.js"
import "../styles/grado_styling.css"

export default class FilteredSearch extends Component {
	constructor() {
		super();
		this.state = {
			grado: "",
			vias: []
		}
	}

	componentDidMount() {
		let vias_array = []
		let grade = decodeURI(this.props.location.search.slice(1))
		for (const via in vias_data.LaCabrera) {
			const element = vias_data.LaCabrera[via];
			if (element.nombre.toLowerCase().includes(grade.toLowerCase()))
				vias_array.push(<ViaList key={element.nombre} bundle={element}/>)
		}
		this.setState({ grado: grade, vias: vias_array })
	}


	render() {
		return (
			<div className="gradoTemplate_wrapper">
				<MyNavbar/>
				<h3>Tu búsqueda</h3>
				<div className="gradoTemplate_vias_wrapper">
					{this.state.vias}
				</div>
			</div>
		)
	}
}
