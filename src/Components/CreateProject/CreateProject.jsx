import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateProject extends Component {

    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMembers = this.onChangeMembers.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            members: '',
            date: new Date(),
            users: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeMembers(e) {
        this.setState({
            members: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const project = {
            username: this.state.username,
            description: this.state.description,
            members: this.state.members,
            date: this.state.date
        }

        console.log(project)
    
        axios.post('http://localhost:5000/project/add', project)
            .then(res => console.log(res.data));
        window.location = "/";
    }

    render(){
        return(
            <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <h3>Create New Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                    <label>Members : </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.members}
                        onChange={this.onChangeMembers}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Project Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
