import React from 'react'

class SingleVia extends React.Component {
	constructor(){
		super();
		this.state = {
			stylings: "thumbnail_foto_wrapper"
		}
		this.amplia_foto = this.amplia_foto.bind(this)
	}

	amplia_foto() {
		if (this.state.stylings === "img_ampliada")
			this.setState({stylings: "thumbnail_foto_wrapper"})
		else
			this.setState({stylings: "img_ampliada"})
	}
	render() {
		let via = this.props.bundle
		let resto_largos = []

		for (let i = 1; i < Object.keys(via.textoLargos).length; i++) {
			resto_largos.push(<p key={i}><b>{i + 1}º Largo:</b> {via.textoLargos[i]}</p>);
		}

		return (
			<div>
				<h3>{via.nombre}</h3>
				<div className="singleVia_texto">
					<div className="Largo1">
						<p><b>1º Largo:</b> {via.textoLargos[0]}</p>
						<div className="thumbnail_foto">
							<div className={this.state.stylings} onClick={() => { this.amplia_foto() }}></div>
						</div>
						{resto_largos}
					</div>
				</div>
			</div>
		)
	}
}

export default SingleVia

//<img className="foto_via" src={require("../data/vias/ezequiel.jpg")} />
