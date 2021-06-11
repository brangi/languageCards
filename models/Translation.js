import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TranslationSchema  = new Schema({
    answer: String,
    card: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Card' },
    language: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Language' },
});


export const Translation = mongoose.model("Translation", TranslationSchema);