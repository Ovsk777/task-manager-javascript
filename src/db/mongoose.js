const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {  // url comprising ip , port no. and db name
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    


