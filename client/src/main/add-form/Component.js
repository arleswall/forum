import React from "react";

function FormComponent(props){
  return (
    <div className="addbox">
      <h1 className="titleName" >Discussion Forum</h1>
      <div className="addFormBox">
            <form onSubmit={props.handleSubmit}>
                <label>Title: </label><input className="inputBox" onChange={props.handleChange} value={props.newItem.title} name="title" placeholder="Title" type="text"/>
                <br/>
                <label>Description: </label><input className="inputBox" onChange={props.handleChange} value={props.newItem.description} name="description" placeholder="Description" type="text"/>
                  <div className="postButtonBox">
                      <button className="postButton">Post</button>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default FormComponent;