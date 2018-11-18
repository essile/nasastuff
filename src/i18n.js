import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from './LanguageFiles/translationEN';
import translationFI from './LanguageFiles/translationFI';

const resources = {
    en: {
        translation: translationEN
    },
    fi: {
        translation: translationFI
    }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: localStorage.getItem("language"),
        // lng: "cimode", // this can be used if you want to see the labels
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: false,
            withRef: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    });

export default i18n;