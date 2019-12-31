import React from "react"
import Home from "./routes/Home.js"
import GradoTemplate from "./routes/GradoTemplate.js"
import {
	BrowserRouter as Router,
	Route,
  } from "react-router-dom";

 class App extends React.Component{
	render() {
		return (
			<div>
				<Router>
					<Route path="/home" component={Home}/>
					<Route path="/grades" component={GradoTemplate}/>
				</Router>
			</div>
		)
	}
}


export default App