import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TranslationSchema  = new Schema({
    answer: String,
    card: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Card' },
    language: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Language' },
});

const CardSchema  = new Schema({
    question: String,
    translations: [TranslationSchema],
});

export const Card = mongoose.model("Card", CardSchema);
