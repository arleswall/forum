import React from "react";
import CommentComponent from "./Component";
import {connect} from "react-redux";
import {issues} from "../../../../redux/actions/";
import axios from "axios";

class CommentContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      inputs: {
            name: "",
            comment:""
          },
          comments: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  componentDidMount(){
    axios.get(`http://localhost:8000/comment?issue=${this.props.id}`).then(response => {
      this.setState({
        comments: response.data.reverse()
      })
    })
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
  axios.post('http://localhost:8000/comment/', {...this.state.inputs, issue: this.props.id}).then(response => {
    console.log(response.data)
    this.setState((prevState)=>{
      return {
        inputs:{
          name:"",
          comment:""
        },
        comments: [
          response.data,
          ...prevState.comments
        ]
      }
  })
})}
  
  render(){
    return(
      <CommentComponent handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      newItem={this.state.inputs}
                      comments={this.state.comments}/>
    )
  }
}

export default connect(null, issues) (CommentContainer);