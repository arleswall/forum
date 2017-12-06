module.exports = {
    port: process.env.PORT || 8000,
    db: process.env.DB || "mongodb://localhost:27017/issue"
    //secret: process.env.SECRET
}
