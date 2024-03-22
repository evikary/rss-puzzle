import './style.css';
import level1 from '../../data/wordCollectionLevel1.json';
import { WordsRound } from '../../store/types';
import shuffle from '../../utils/utils';
import store from '../../store/store';
import { incrementRowIndexAction } from '../../store/actions';

store.subscribe(renderGame);

function renderGame() {
  rowIndex = store.getState().rowIndex;

  if (rowIndex > 0) {
    nextPhrase();
  }
}

/// Variables
let { rowIndex } = store.getState();
let currentRound: HTMLDivElement;
let source: HTMLDivElement;
let continueBtn: HTMLButtonElement;
let checkBtn: HTMLButtonElement;
let container: HTMLElement;
const sentences: WordsRound[] = level1.rounds[0].words;

/// Handlers
function handleCurrentRound(e: Event) {
  if (!e.target || e.target === e.currentTarget) {
    return;
  }

  [...currentRound.children].forEach((item) => {
    item.classList.remove('error-word');
    item.classList.remove('right-word');
  });

  source.append(e.target as HTMLElement);

  if (source.children.length !== 0) {
    checkBtn.classList.add('disabled');
    checkBtn.setAttribute('disabled', 'disabled');
  }
}

function handleSource(e: Event) {
  if (!e.target || e.target === e.currentTarget) {
    return;
  }

  currentRound.append(e.target as HTMLElement);
  if (source.children.length === 0) {
    checkBtn.classList.remove('disabled');
    checkBtn.removeAttribute('disabled');
  }
}

function handleCheck() {
  checkWords();
  checkPhrase();
}

/// Creation next phrase
function nextPhrase() {
  currentRound?.removeEventListener('click', handleCurrentRound);
  currentRound = container.querySelector(`.round${rowIndex + 1}`) as HTMLDivElement;
  currentRound?.addEventListener('click', handleCurrentRound);
  source.innerHTML = createSource();
  continueBtn.setAttribute('disabled', 'disabled');
  continueBtn.classList.add('disabled');
  checkBtn.classList.add('disabled');
  checkBtn.setAttribute('disabled', 'disabled');
}

/// Creation source element
function createSource() {
  const sourceData = shuffle(sentences[rowIndex].textExample.split(' '))
    .map((item) => `<span class='word'>${item}</span>`)
    .join('');

  return sourceData;
}

/// Check phrase
function checkPhrase() {
  const phrase = currentRound.textContent;
  const originalPhrase = sentences[rowIndex].textExample.split(' ').join('');

  if (phrase && phrase === originalPhrase) {
    continueBtn.classList.remove('disabled');
    continueBtn.removeAttribute('disabled');
  }
}

/// Check words
function checkWords() {
  const originalPhrase = sentences[rowIndex].textExample.split(' ');
  [...currentRound.children].forEach((item, index) => {
    if (item.textContent !== originalPhrase[index]) {
      item.classList.add('error-word');
    } else {
      item.classList.add('right-word');
    }
  });
}

/// Component
function playGame() {
  container = document.createElement('main-container');
  container.classList.add('main-container');
  container.innerHTML = `
      <div class='play-box'>
        <div class='board-pazzle'>${sentences.map((item: WordsRound, index: number) => `<div class='rounds round${index + 1}'></div>`).join('')}</div>
        <div class='source'>${createSource()}</div>
        <div class='box-btn'>
          <button disabled class='btn-continue disabled'>Continue</button>
          <button disabled class='btn-check disabled'>Check</button>
        </div> 
      </div>
    `;

  currentRound = container.querySelector(`.round${rowIndex + 1}`) as HTMLDivElement;
  source = container.querySelector('.source') as HTMLDivElement;
  continueBtn = container.querySelector('.btn-continue') as HTMLButtonElement;
  continueBtn.onclick = handleContinue;
  checkBtn = container.querySelector('.btn-check') as HTMLButtonElement;

  source?.addEventListener('click', handleSource);
  currentRound?.addEventListener('click', handleCurrentRound);
  checkBtn.addEventListener('click', handleCheck);

  function handleContinue() {
    store.dispatch(incrementRowIndexAction());
  }

  return container;
}

export default playGame;
