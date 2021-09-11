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
        this.onChangeDomain = this.onChangeDomain.bind(this);
        this.onChangeGithub = this.onChangeGithub.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeResume = this.onChangeResume.bind(this);
        this.onChangeWork = this.onChangeWork.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            phone: '',
            college: '',
            batch: '',
            msc: '',
            domain: '',
            github: '',
            linkedin: '',
            resume: '',
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
    
    onChangeDomain(e) {
        this.setState({
            domain: e.target.value
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
        
    onChangeResume(e) {
        this.setState({
            resume: e.target.value
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
            email: this.state.email,
            phone: this.state.phone,
            college: this.state.college,
            batch: this.state.batch,
            msc: this.state.msc,
            domain: this.state.domain,
            github: this.state.github,
            linkedin: this.state.linkedin,
            resume: this.state.resume,
            work: this.state.work,

        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => {
                console.log(res.data);
                alert(res.data);
            });

        // let error;
        // try {
        //     await axios.get('http://localhost:5000/users/add/404').catch(err => {
        //     if (err.response.status === 404) {
        //         throw new Error(`${err.config.url} not found`);
        //     }
        //     throw err;
        //     });
        // } catch (err) {
        //     error = err;
        // }
        
        // error.message; // "https://httpbin.org/status/404 not found"

        this.setState({
            username: '',
            email: '',
            phone: '',
            college: '',
            batch: '',
            msc: '',
            domain: '',
            github: '',
            linkedin: '',
            resume: '',
            work:''
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
                    <label>Batch: </label><br></br>
                    <select required value = {this.state.batch} onChange = {this.onChangeBatch}>
                        <option></option>
                        <option value = "2025">2021 - 2025</option>
                        <option value = "2024">2020 - 2024</option>
                        <option value = "2023">2019 - 2023</option>
                        <option value = "2022">2018 - 2022</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Domain: </label><br></br>
                    <select required value = {this.state.domain} onChange = {this.onChangeDomain}>
                        <option></option>
                        <option value = "learner">Learner</option>
                        <option value = "Frontend">Frontend Web Development</option>
                        <option value = "Backend">Backend Web Development</option>
                        <option value = "App">App Development</option>
                        <option value = "OS">Operating Systems</option>
                        <option value = "Dbms">Database Management</option>
                        <option value = "Deployment">AWS/Heroku/Azure</option>
                        <option value = "ML">Machine Learning</option>
                        <option value = "AI">Artificial Intelligence</option>
                        <option value = "AR">AR / VR</option>
                        <option value = "DSA">Data Structures and Algorithms</option>
                    </select>
                </div>

                <label>Are you are a member of MSC, KIIT Chapter? </label>
                <div className="form-group">
                    <input type="checkbox"
                            onChange = {this.onChangeMsc}/>
                </div>

                <div className="form-group"> 
                    <label>Github Link: </label>
                    <input type="url"
                        required
                        className="form-control"
                        value={this.state.github}
                        onChange={this.onChangeGithub}
                        />
                </div>

                <div className="form-group"> 
                    <label>Linkedin Link: </label>
                    <input  type="url"
                        required
                        className="form-control"
                        value={this.state.linkedin}
                        onChange={this.onChangeLinkedin}
                        />
                </div>

                <div className="form-group"> 
                    <label>CV / Resume Link: </label>
                    <input  type="url"
                        required
                        className="form-control"
                        value={this.state.resume}
                        onChange={this.onChangeResume}
                        />
                </div>

                <div className="form-group"> 
                    <label>Share the link of any of your work done: </label>
                    <input  type="url"
                        className="form-control"
                        value={this.state.work}
                        onChange={this.onChangeWork}
                        />
                </div>


                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}
