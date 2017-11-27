import React from "react";

function CommentComponent(props){
    console.log(props)
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <label>Name: </label><input onChange={props.handleChange} value={props.newItem.name} name="name" placeholder="Name" type="text"/>
            <label> Comment: </label><input onChange={props.handleChange} value={props.newItem.comment} name="comment" placeholder="Comment" type="text"/>
            <button>Post</button>
            {props.comments.map((item, index)=>{
              return (
                <div className="comments">
                    <p>Name: {item.name}</p>
                    <p>Comment: {item.comment}</p>
                </div>
                )
            })
          }
        </form>
    </div>
  )
}

export default CommentComponent;