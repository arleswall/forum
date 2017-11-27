import React from "react";
import FormContainer from "./add-form/Container";
import IssueList from "./issues/IssueList";

function App(props){
  return(
    <div className="body">
      <FormContainer/>
      <IssueList/>      
    </div>
  )
}

export default App;