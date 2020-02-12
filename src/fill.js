import React, {Component} from 'react';


class AddNewActivity extends Component{
    state = {
        activity: ''
    }
    handleChange = (e) =>{
        this.setState({
            activity: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.bore(this.state); 
        this.setState({
            activity: ''
        })
    }
    render(){
        return(
        <div className="">
        <form onSubmit={this.handleSubmit}>
            <label className="blue-text">Add New Stuff Todo: </label>
            <input type="text" onChange={this.handleChange} value={this.state.activity}/>
        </form>
        </div>
        )
    }
}

export default AddNewActivity;