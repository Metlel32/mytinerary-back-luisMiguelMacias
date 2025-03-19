let url = ""
mongoose.connect(url)
.then(()=> console.log("database connectd"))
.catch(error => console.log(error))