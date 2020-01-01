import React from "react"
import Home from "./routes/Home.js"
import GradoTemplate from "./routes/GradoTemplate.js"
import ViaTemplate from "./routes/ViaTemplate.js"
import Login from "./routes/Login.js"
import {
	BrowserRouter as Router,
	Route,
  } from "react-router-dom";

 class App extends React.Component{
	render() {
		return (
			<div>
				<Router>
					<Route exact path="/" component={Login}/>
					<Route path="/home" component={Home}/>
					<Route path="/grades" component={GradoTemplate}/>
					<Route path="/via" component={ViaTemplate}/>
				</Router>
			</div>
		)
	}
}


export default App

