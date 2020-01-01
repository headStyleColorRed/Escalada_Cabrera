import React from 'react'
import "../styles/login_styling.css"
import { AiOutlineMail } from "react-icons/ai"
import { MdLockOutline } from "react-icons/md"

 class Login extends React.Component {
	render(){
		return (
			<div className="login_wrapper">
				<div className="login_main">
					<div className="login_main_title">
						<h2>Travelers</h2>
						<p>Climbing app</p>
					</div>
					<div className="login_main_form">
						<div className="login_main_form_user">
							<AiOutlineMail color="#FC6633" className="envelop_icon" />
							<div className="login_main_form_user_input">
								<label>E-mail</label>
								<input type="email" placeholder="..." />
							</div>
						</div>
						<div className="login_main_form_user">
							<MdLockOutline color="#FC6633" className="envelop_icon" />
							<div className="login_main_form_user_input">
								<label>Password</label>
								<input type="password" placeholder="..." />
							</div>
						</div>
						<p className="passwordForgot">Forgot Password</p>
					</div>
						<div className="account_creation">
							<p>Don't have an account?</p>
							<p className="create_account">create now</p>
						</div>
				</div>
				<div onClick={() => {this.props.history.push("/home")}} className="login_button">
					<p>Log in</p>
				</div>
			</div>
		)
	}
}

export default Login