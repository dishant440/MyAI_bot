import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    telegramId:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    isBot:{
        type:Boolean,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    promptTokens:{
        type:Number,
        required: false
    },
    completionTokens:{
        type:Number,
        required: false,
    }

},{timestamp:true})


export default mongoose.model('User',UserSchema)



