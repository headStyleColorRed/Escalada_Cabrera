import React from 'react'
import vias_data from "../data/vias.json"
import SingleVia from "../components/singleVia.js"
import MyNavbar from "../components/Navbar.js"
import "../styles/viaTemplate_styling.css"


export default class ViaTemplate extends React.Component {

	constructor() {
		super();
		this.state = {
			via: []
		}
	}

	componentDidMount() {
		let via_array = [];
		let viaNombre = decodeURI(this.props.location.search.slice(1))
		for (const via in vias_data.LaCabrera) {
			const element = vias_data.LaCabrera[via];
			if (element.nombre === viaNombre){
				via_array.push(<SingleVia key={element.nombre} bundle={element}/>)
			}
		}
		
		this.setState({ via: via_array })
	}
	
	render() {
		return (
			<div className="viaTemplate_wrapper">
			<MyNavbar />
				{this.state.via}
			</div>
		)
	}
}




