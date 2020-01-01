import React from 'react'
import "../styles/searchBar_styling.css"
import { IoIosSearch } from "react-icons/io"
import { withRouter } from "react-router-dom"

class SearchBar extends React.Component {
	constructor(){
		super();
		this.state ={
			searchData: ""
		}
		this.setSearchData = this.setSearchData.bind(this)
		this.sendToRoute = this.sendToRoute.bind(this)
	}
	
	filterIt(){
		this.props.history.push({
			pathname: "/filteredSearch",
			search: `${this.state.searchData}`
		})
	}

	setSearchData(event){
		this.setState({searchData: event.target.value})
	}

	sendToRoute(event){
		if (event.key === "Enter")
			this.filterIt();
	}

	render(){
		return (
			<div className="searchBar_wrapper">
				<div className="searchBar_lupa">
					<IoIosSearch onClick={() => {this.filterIt()}} />
				</div>
				<div className="searchBar_input">
					<input type="text" onChange={this.setSearchData} placeholder="Busca una vía..." onKeyPress={this.sendToRoute} />
				</div>
			</div>
		)
	}
}

export default withRouter(SearchBar)