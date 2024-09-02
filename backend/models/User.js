import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
      
    },
},
    {
        timestamps: true,
    },
);

export const User =mongoose.model("User",Schema);