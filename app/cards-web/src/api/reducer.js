import { action } from 'easy-peasy';
const reducer = {

    currentLanguages: [],
    currentCards: [],

    setInitialLang: action((state, data) => {
        state.currentLanguages = data.languages;
    }),

    syncLang: action((state, data) => {
        state.currentLanguages = data.languages;
    }),

    setInitialCards: action((state, data) => {
        state.currentCards = data.cards;
    }),

    syncCards: action((state, data) => {
        state.currentCards = data.cards;
    }),


};

export default reducer;
