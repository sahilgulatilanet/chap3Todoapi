const mongoose=require('mongoose');
const validator=require('validator');
var User=mongoose.model('users',{
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
    }
     /*   //unique:true,
        validate:{
            validator:validator.isEmail,
            message:'{value} is not a email'
        }
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }]*/
});
module.exports={User};