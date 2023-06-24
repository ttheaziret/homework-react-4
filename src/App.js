import React from 'react';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phoneNumber: "",
      emailAddress: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { fullName, phoneNumber, emailAddress } = this.state;
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email Address:", emailAddress);

    alert(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail Address: ${emailAddress}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email Address:
          <input type="text" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

