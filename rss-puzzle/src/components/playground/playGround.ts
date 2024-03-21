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
let container: HTMLElement;
const sentences: WordsRound[] = level1.rounds[0].words;

/// Handlers
function handleCurrentRound(e: Event) {
  if (!e.target || e.target === e.currentTarget) {
    return;
  }

  source.append(e.target as HTMLElement);
}

function handleSource(e: Event) {
  if (!e.target || e.target === e.currentTarget) {
    return;
  }

  currentRound.append(e.target as HTMLElement);
  checkPhrase(currentRound.textContent);
}

/// Creation next phrase
function nextPhrase() {
  currentRound?.removeEventListener('click', handleCurrentRound);
  currentRound = container.querySelector(`.round${rowIndex + 1}`) as HTMLDivElement;
  currentRound?.addEventListener('click', handleCurrentRound);
  source.innerHTML = createSource();
  continueBtn.setAttribute('disabled', 'disabled');
  continueBtn.classList.add('disabled');
}

/// Creation source element
function createSource() {
  const sourceData = shuffle(sentences[rowIndex].textExample.split(' '))
    .map((item) => `<span class='word'>${item}</span>`)
    .join('');

  return sourceData;
}

/// Check phrase
function checkPhrase(phrase: string | null) {
  const originalPhrase = sentences[rowIndex].textExample.split(' ').join('');
  if (phrase && phrase === originalPhrase) {
    continueBtn.classList.remove('disabled');
    continueBtn.removeAttribute('disabled');
  }
}

/// Component
function playGame() {
  container = document.createElement('main-container');
  container.classList.add('main-container');
  container.innerHTML = `
      <div class='play-box'>
        <div class='board-pazzle'>${sentences.map((item: WordsRound, index: number) => `<div class='rounds round${index + 1}'></div>`).join('')}</div>
        <div class='source'>${createSource()}</div>
          <button disabled class='btn-continue disabled'>Continue</button>
      </div>
    `;

  currentRound = container.querySelector(`.round${rowIndex + 1}`) as HTMLDivElement;
  source = container.querySelector('.source') as HTMLDivElement;
  continueBtn = container.querySelector('.btn-continue') as HTMLButtonElement;
  continueBtn.onclick = handleContinue;

  source?.addEventListener('click', handleSource);
  currentRound?.addEventListener('click', handleCurrentRound);

  function handleContinue() {
    store.dispatch(incrementRowIndexAction());
  }

  return container;
}

export default playGame;
