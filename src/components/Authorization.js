import React from 'react'
// import { Redirect } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signup: {
                username: '',
                password: '',
            },
            login: {
                username: '',
                password: '',
            }
        }
        this.handleChangeSignup = this.handleChangeSignup.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
    }
    handleChangeSignup(event) {
        this.setState({
            signup: {...this.state.signup, [event.currentTarget.id]: event.currentTarget.value},

        })
    }
        // let signup = {...this.state.si}

        // this.setState({
        //     signup: {
        //         {...this.state.signup},
        //         {[event.currentTarget.id]: event.currentTarget.value}
        //     }
        // })


    handleChangeLogin(event) {
        // this.setState({login: {
        //     [event.currentTarget.id]: event.currentTarget.value
        // }})
        this.setState({
            login: {...this.state.login, [event.currentTarget.id]: event.currentTarget.value},

        })
    }


    // handleSubmit(event) {
    //     event.preventDefault()
    //     // send to login route on server
    //         //fetch
    //             // on success, go to index page
    //     // clear values after submit
    //     console.log('submitted!')

    //     fetch('http://localhost:3003' + '/users', {
    //         method: 'POST',
    //         body:JSON.stringify({
    //             username: this.state.username,
    //             password: this.state.password,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         if (res.status === 200) {
    //             // console.log('ready to redirect');
    //             // this.props.history.push('/');
    //             this.setState({
    //                 redirect: true,
    //             })
    //             // redirect = true;
    //         } else {
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //     }).catch(err => {
    //         console.error(err);
    //         alert('Error logging in. Please, try again.')
    //     })
    // }

    // renderRedirect = () => {
    //     console.log('renderRedirect');
    //     if (this.state.redirect) {
    //         return <Redirect to='/' />
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.signup.username, this.state.signup.password)} id="signup">
                {/* put handleSubmit in form tag */}
                    <fieldset>
                        <legend>Sign Up</legend>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.signup.username}
                            onChange={this.handleChangeSignup}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.signup.password}
                            onChange={this.handleChangeSignup}
                        />
                        <input type="submit"/>
                    </fieldset>
                </form>

                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.login.username, this.state.login.password)} id="login">
                {/* put handleSubmit in form tag */}
                    <fieldset>
                        <legend>Log In</legend>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.login.username}
                            onChange={this.handleChangeLogin}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.login.password}
                            onChange={this.handleChangeLogin}
                        />
                        <input type="submit"/>
                    </fieldset>
                </form>


            </div>
        )
    }
}

export default Authorization