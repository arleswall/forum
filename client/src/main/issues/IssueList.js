import React from "react";
import ListComponent from "./issue/ListComponent";
import{connect} from "react-redux";
import {issues} from "../../redux/actions/";

class IssueList extends React.Component{
  constructor(){
    super();

    this.genList = this.genList.bind(this);
  }
  
  componentDidMount(){
    this.props.loadIssues();
  }
  
  genList(){
    return this.props.issues.map((issue, index)=>{
      return <ListComponent key= {issue.title + index}
                            issue={issue}
                            index={index}
                      
                            />
    })
  }
  
  render(){
    return(
      <div>
          {this.genList()}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    issues:state.issues
  }
}

export default connect(mapStateToProps, issues)(IssueList);
