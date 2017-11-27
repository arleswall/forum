import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {issues} from "../../redux/actions/"

class FormContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      inputs: {
            title: "",
            description:""
            }
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    event.persist();
    this.setState((prevState)=>{
      return{
        inputs:{
          ...prevState.inputs,
          [event.target.name]:event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.addIssue(this.state.inputs);
    this.setState((prevState)=>{
      return {
        inputs:{
          title:"",
          description:""
        }
      }
  })
}
  
  render(){
    return(
      <FormComponent handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      newItem={this.state.inputs}/>
    )
  }
}

export default connect(null, issues) (FormContainer);