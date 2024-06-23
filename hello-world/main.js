import LangTranslate from 'lang-translate';
import phrases from './data/phrases.js';

// Dom elements
const textDom = document.getElementById('phrase');
const language = document.getElementById('language');

const langTranslate = new LangTranslate('en', phrases);

const text = langTranslate.translate(1);
textDom.innerHTML = text;

language.addEventListener('change', () => {
    langTranslate.setLanguage(language.value);
    textDom.innerHTML = langTranslate.translate(1);
});
