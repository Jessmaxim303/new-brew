import React, { Component } from 'react';
import { fetchStateBreweryApi } from '../apiCalls/apiCalls.js';
import './Form.css';

class Form extends Component {
	constructor() {
		super();
		this.state = {
       location: '',
		}
	}

	componentDidMount() {
    Promise.all([this.loadBreweryData()])
  }

  loadBreweryData() {
    fetchStateBreweryApi(this.state.location)
    .then(data => {
    	console.log(data)
      // this.props.getNews(data)
    })
  }

	handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitIdea = event => {
    event.preventDefault(); // prevents the page from refreshing when the form submits
    const newIdea = {
      id: Date.now(),
      ...this.state // spreading in the title and description
    }
    this.props.addIdea(newIdea); // using the addIdea method from App that we passed as a prop to Form
    this.clearInputs(); // invoking the method I wrote below to reset the inputs
    console.log(this.state.location)
    fetchStateBreweryApi(this.state.location)
  }

  clearInputs = () => {
    this.setState({ location: '', });
  }

	render() {
		return (
			<form className="form-main-container">
			  <div className="form-sub-container form-left"></div>
			  <div className="form-sub-container form-right">
			  	
			  <input
            type='text'
            placeholder='Location'
            name='location'
            value={this.state.location}
            onChange={event => this.handleChange(event)}
        />

        <button className="form-submit-button" onClick={event => this.submitIdea(event)}>SUBMIT</button>

			  </div>
			</form>
			)
	}


}

export default Form;

