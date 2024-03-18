const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');
const resetButton = document.querySelector('.reset-button');
const header = document.querySelector('header');
const controls = document.querySelector('.controls');

function reset() {
    textInput.value = '';
    translationText.innerText = 'Traduzione';
    translationFlag.innerText = '';
    header.style.backgroundColor = 'rgb(76, 100, 242)';
    controls.style.backgroundColor = 'rgb(76, 100, 242)';
    langButtons.forEach(function (langButton) {
        langButton.style.backgroundColor = 'white';
    })

}

async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url)
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText
    translationText.innerText = result;
    translationFlag.innerText = flag;
}

langButtons.forEach(function (langButton) {
    langButton.addEventListener('click', function () {
        const text = textInput.value;
        const lang = langButton.dataset.lang;
        const flag = langButton.innerText;
        console.log(lang)
        if (lang === 'en') {
            header.style.backgroundColor = 'blue';
            controls.style.backgroundColor = 'red';
            langButtons.forEach(function (langButton) {
                langButton.style.backgroundColor = 'white';

            })

        } else if (lang === 'fr') {
            header.style.backgroundColor = 'red';
            controls.style.backgroundColor = 'blue';
            langButtons.forEach(function (langButton) {
                langButton.style.backgroundColor = 'white';

            })

        } else if (lang === 'es') {
            header.style.backgroundColor = 'yellow';
            controls.style.backgroundColor = 'red';
            langButtons.forEach(function (langButton) {
                langButton.style.backgroundColor = 'yellow';

            })
        }
        translate(text, lang, flag);
    });
});

resetButton.addEventListener('click', reset);



