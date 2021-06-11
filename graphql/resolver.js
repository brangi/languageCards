import { Card } from "../models/Card";
import { Translation } from "../models/Translation";
import {Language} from "../models/Language";

export const resolvers = {
  Query: {
    translations: () => Translation.find(),
    cards: async() => {
      return Card.find().populate('translations.language')
    },
    card: (parent, args, _, __) =>{
      return Card.findById(args.id).populate('translations.language')
    },
    languages: () => Language.find(),
  },
  Mutation: {
    setLanguage: async(_, { language }) => {
      const lang = new Language({
        language,
      });

      await lang.save();

      return lang
    },
    setCard: async(_, { question, translations }) => {
      const card = new Card({
        question,
      });

      await card.save();

      for (const t of  translations) {
        const {language, answer} = t;
        const lang = await Language.findById(language);
        if (lang) {
          const translationObj = { card: card._id, language: lang._id, answer };
          const translation = new Translation(translationObj);
          await translation.save();
          card.translations.push({ ...translationObj, _id: translation._id})
        }
      }

      return card.save()
    },
  }
};

