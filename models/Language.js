import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LanguageSchema  = new Schema({
    language: String,
});


export const Language = mongoose.model("Language", LanguageSchema);