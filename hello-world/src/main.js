import LangTranslate from 'lang-translate';
import phrases from '../data/phrases.js';

// DOM elements
const title = document.querySelector('.title');
const langSelect = document.getElementById('language');

// Create a new instance of LangTranslate
const lang = new LangTranslate('en', phrases);
title.innerText = lang.translate(1);

// Event listener for language selection
langSelect.addEventListener('change', () => {
    lang.setLanguage(langSelect.value);
    title.innerText = lang.translate(1);
});
