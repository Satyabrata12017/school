import React, {Component} from 'react'
import imgadmin from '../../src/useradmin.svg'
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default class Admin extends Component {
    
    constructor(props){
        super(props)
        let loggedIn=false
        this.state={
            useremail:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })

    }

    submitForm(e){
       e.preventDefault()
       const {useremail,password}=this.state
       if(useremail==="satyabrata12017@gmail.com" && password==="1234"){
           this.state={
            loggedIn:true
           }
       }
    }
    render(){
        if(this.state.loggedIn){
            useHistory.push('/home')
           
        }
        return (
            <body className="text-center">
                <form class="form-signin my-4" onSubmit={this.submitForm}>
                
                    <img class="mb-4" src={imgadmin} alt="" width="72" height="72"/>
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email" name="useremail" value={this.state.useremail} onChange={this.onChange} required autofocus />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required />
                    <input type="submit"/>
                    
                </form>
            </body>
        );
    }
}


