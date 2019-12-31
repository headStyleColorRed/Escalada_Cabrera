import React from 'react'
import "../styles/searchBar_styling.css"
import { IoIosSearch } from "react-icons/io"

export default function SearchBar() {
	return (
		<div className="searchBar_wrapper">
			<div className="searchBar_lupa">
				<IoIosSearch/>
			</div>
			<div className="searchBar_input">
				<input type="text" placeholder="Busca una vía..." />
			</div>
		</div>
	)
}
