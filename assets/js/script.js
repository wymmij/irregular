import * as conjugationDataSets from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const dataSet = document.getElementById('data-set');
    const questionForms = document.getElementById('question-form');
    const answerForms = document.getElementById('answer-form');
    const answerCheck = document.getElementById('answer-check');

    // Event Listeners
    // runs whenever a different data set is selected
    dataSet.addEventListener('change', (event) => {
        dataSet.setAttribute('data-choice', event.target.value);
    });

    // runs whenever a different question trigger form is selected
    questionForms.addEventListener('change', (event) => {
        questionForms.setAttribute('data-choice', event.target.value);
    });

    // runs whenever a different answer form to be tested on is selected
    answerForms.addEventListener('change', (event) => {
        answerForms.setAttribute('data-choice', event.target.value);
    });

    // ensures the ‘Submit Answer’ button processes the answer when mouse-clicked
    answerCheck.addEventListener('click', checkAnswer);

    // create the menu for choosing between different conjugation data sets
    buildDataMenu();

    // create the question and answer conjugation forms radio button groups
    buildConjugationMenus();

    // run on page load rather than waiting to run manually
    run();
});

/**
 * Returns an array of the names of the data sets.
 * @returns {array}
 */
function getDataSets() {
    let dataSets = new Array();
    for (const dataSet in conjugationDataSets) {
        dataSets.push(dataSet);
    }

    return dataSets;
}

/**
 * Creates the HTML option elements as children of the select element for
 * choosing between the different conjugation data sets.
 */
function buildDataMenu() {
    const dataSets = getDataSets();
    const dataSelect = document.getElementById('data-set');

    for (const dataSet of dataSets) {
        let opt = document.createElement('option');
        opt.textContent = displayFormat(dataSet);
        opt.setAttribute('value', dataSet);
        dataSelect.appendChild(opt);
    }
    document.querySelector('option:last-of-type').selected = true;
    dataSelect.setAttribute('data-choice', dataSelect.value);
}

/**
 * Returns a titlecase string more appropriate (nicer) for textual display
 * @param {string} str - the string to format
 * @returns {string} The ‘display’ titlecase version of the input string
 */
function displayFormat(str) {
    const format = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return format.charAt(0).toUpperCase() + format.slice(1);
}

function buildConjugationMenus() {
    //
}

function run() {
    //
}

function checkAnswer() {
    //
}
