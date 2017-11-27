import React from "react";
import {connect} from "react-redux";
import {issues} from "../../../redux/actions/";
import CommentContainer from "./comments/Container";

function ListComponent(props){
  return(
    <div className="postbox">
            <button onClick={()=>{props.deleteIssue(props.issue._id)}} className="deletebutton">X</button>
                  <h3 className="title">{props.issue.title}</h3>
                  <h5 className="description">{props.issue.description}</h5>
                      <div className="likesbox">
                            
                            <span className="likes"> {props.issue.likes} Likes</span>
                            <button className="likesButtons" onClick={()=>{props.likes(props.issue)}}>+</button>
                            
                            <button className="likesButtons" onClick={()=>{props.dislikes(props.issue)}}>-</button>
                            <span className="dislikes">{props.issue.dislikes} Dislikes</span>  
                      </div>
                    <CommentContainer id= {props.issue._id}/>
              <hr/>
    </div>
  )
}

export default connect(null, issues)(ListComponent);