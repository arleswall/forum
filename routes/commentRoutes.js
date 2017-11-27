const express = require("express");
const commentRoutes = express.Router();
const Comment = require("../models/comment");


commentRoutes.get("/", (req, res)=>{
  Comment.find(req.query,(err, comments)=>{
    if (err) return res.status(500).send(err);
    return res.send(comments);
  })
})

commentRoutes.post("/", (req, res)=>{
  const newComment = new Comment (req.body);
  newComment.save((err, comment)=>{
    if (err) return res.status(500).send(err);
    return res.send(comment);
  })
})

commentRoutes.delete("/:id", (req, res)=>{
  Comment.findByIdAndRemove(req.params.id, (err, comment)=>{
    if (err) return res.status(500).send(err);
    return res.send(comment);
  })
})

module.exports = commentRoutes;