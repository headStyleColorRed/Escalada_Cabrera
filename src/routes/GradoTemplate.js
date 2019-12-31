import React, { Component } from 'react'
import { Link } from "react-router-dom"
import vias_data from "../data/vias.json"

export default class GradoTemplate extends Component {
	constructor() {
		super();
		this.state = {
			vias: {}
		}
	}

	componentDidMount() {
		let vias_array = []
		let grade = this.props.location.search.slice(1)
		for (const via in vias_data.LaCabrera) {
			const element = vias_data.LaCabrera[via];
			if (element.grado === grade)
				vias_array.push(element)
		}
		console.log(vias_array)
	}

	render() {
		return (
			<div>
				<Link to="/home"> A casa !</Link>
			</div>
		)
	}
}
