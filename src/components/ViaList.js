import React from 'react'
import { withRouter } from "react-router";
import { IoIosStarOutline } from "react-icons/io"

class ViaList extends React.Component {
	constructor() {
		super();
		this.state = {}
		this.showVia = this.showVia.bind(this)
	}
	showVia(event) {
		this.props.history.push({
			pathname: "/via",
			search: `${event.nombre}`
		})
	}
	render() {
		let via = this.props.bundle;
		let estrellas = [];
		for (let i = 0; i < via.estrellas; i++)
			estrellas.push(<li key={i}><IoIosStarOutline color="#FE6B3F" fontSize="1.2rem" /></li>)


		return (
			<div className="via_temp" onClick={() => this.showVia(via)}>
				<div className="via_temp_top">
					<div className="via_temp_top_data">
						<p className="via_temp_top_name">{via.nombre}</p>
						<p className="via_temp_top_grade">{via.grado}</p>
					</div>
					<div className="via_temp_top_stars">{estrellas}</div>
				</div>
				<div className="via_temp_bottom">
					<p>{via.metros}m - {via.largos} largos</p>
					<p>{via.equipacion}</p>
					<p className="via_temp_bottom_orientacion">
						{via.cara}
					</p>
				</div>
				<hr className="via_temp_hr" />
			</div>
		)
	}
}





export default withRouter(ViaList)