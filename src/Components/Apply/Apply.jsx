import React, {Component} from "react";
import axios from "axios";

export default class Apply extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCollege = this.onChangeCollege.bind(this);
        this.onChangeBatch = this.onChangeBatch.bind(this);
        this.onChangeMsc = this.onChangeMsc.bind(this);
        this.onChangeGithub = this.onChangeGithub.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeWork = this.onChangeWork.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            phone: '',
            college: '',
            batch: '',
            msc: '',
            github: '',
            linkedin: '',
            work:''
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    
    onChangeCollege(e) {
        this.setState({
            college: e.target.value
        })
    }
    
    onChangeBatch(e) {
        this.setState({
            batch: e.target.value
        })
    }
    
    onChangeMsc(e) {
        this.setState({
            msc: e.target.value
        })
    }
    
    onChangeGithub(e) {
        this.setState({
            github: e.target.value
        })
    }
    
    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        })
    }
    
    onChangeWork(e) {
        this.setState({
            work: e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,

        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));


        this.setState({
            username: ''
        })
    }
  

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h3>Registration</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>

                <div className="form-group"> 
                    <label>Phone: </label>
                    <input  type="tel"
                        pattern="[0-9]{4}-[0-9]{6}"
                        required
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        />
                </div>

                <div className="form-group"> 
                    <label>College: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.college}
                        onChange={this.onChangeCollege}
                        />
                </div>

                <div className="form-group"> 
                    <label>Batch: </label>
                    <input type="number"
                        required
                        className="form-control"
                        value={this.state.batch}
                        onChange={this.onChangeBatch}
                        />
                </div>

                <label>Are you are a member of MSC, KIIT Chapter? </label>
                <div className="radio"> 
                    <label for="yes">
                    <input type="radio"
                        className="form-control"
                        value= "Yes"
                        onChange={this.onChangeMsc}
                        />
                    Yes
                    </label>
                </div>
                <div className="radio"> 
                    <label for="no">
                    <input type="radio"
                        className="form-control"
                        value= "No"
                        onChange={this.onChangeMsc}
                        />
                    No
                    </label>
                </div><br></br>

                <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>

                <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>

                <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </div>


                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}
