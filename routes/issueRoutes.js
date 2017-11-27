const express = require("express");
const issueRoutes = express.Router();
const Issue = require("../models/issue");

//app.get("/", (req, res)=>{
// res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//})

issueRoutes.get("/", (req, res)=>{
  Issue.find((err, issues)=>{
    if (err) return res.status(500).send(err);
    return res.send(issues);
  })
})

issueRoutes.get("/:id", (req, res)=>{
  Issue.findById(req.params.id, (err, issue)=>{
    if (err) return res.status(500).send(err);
    return res.send(issue);
  })
})

issueRoutes.post("/", (req, res)=>{
  const newIssue = new Issue (req.body);
  newIssue.save((err, issue)=>{
    if (err) return res.status(500).send(err);
    return res.send(issue);
  })
})

issueRoutes.delete("/:id", (req, res)=>{
  Issue.findByIdAndRemove(req.params.id, (err, issue)=>{
    if (err) return res.status(500).send(err);
    return res.send(issue);
  })
})

issueRoutes.put("/:id", (req, res)=>{
  Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, issue)=>{
    if (err) return res.status(500).send(err);
    return res.send(issue);
  })
})



module.exports = issueRoutes;