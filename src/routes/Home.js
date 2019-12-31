import React from 'react'
import MyNavbar from "../components/Navbar.js"
import SearchBar from "../components/SearchBar.js"
import "../styles/home_styling.css"

export default class Home extends React.Component {

	list_routes(event){
		this.props.history.push({
			pathname: "/grades",
			search: `${event}`
		})
	}

	render() {
		let grados_array = [];
		let grados = ["IV", "IV+", "V", "V+", "6a", "6a+", "6b", "6b+", "6c", "6c+", "7a", "7a+"]
		for (let i = 0; i < grados.length; i++) {
			grados_array.push(
				<div key={i} className="grado cuarto"  onClick={() => { this.list_routes(grados[i]) }}>
					<p>{grados[i]}</p>
				</div>)
		}

		return (
			<div className="home">
				<MyNavbar />
				<div className="home_top">
					<div className="home_top_textWrapper">
						<h3>La Cabrera</h3>
						<p>Tus vías de escalada en una sola app</p>
					</div>
					<div className="home_search_bar">
						<SearchBar />
					</div>
				</div>
				<div className="home_viasPorGrado">
					<div className="home_viasPorGrado_texto">
						<p className="home_viasPorGrado_texto_titulo">Vías por grado</p>
						<p className="home_viasPorGrado_texto_seeAll">See all...</p>
					</div>
					<div className="home_viasPorGrado_vias_template">
						{grados_array}
					</div>
				</div>
				<div className="home_actualidad">
					<div className="home_actualidad_texto">
						<p className="home_viasPorGrado_texto_titulo">Actualidad</p>
					</div>
					<div className="home_actualidad_tiempo">
						<div className="home_actualidad_tiempo_hoy">
							<p>Hoy</p>
						</div>
						<div className="home_actualidad_tiempo_manana">
							<p>Mañana</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
