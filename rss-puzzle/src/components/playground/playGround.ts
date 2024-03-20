import './style.css';
import level1 from '../../data/wordCollectionLevel1.json';
import { WordsRound } from '../../store/types';
import shuffle from '../../utils/utils';

function playGame() {
  const container = document.createElement('main-container');
  container.classList.add('main-container');
  const sentences: WordsRound[] = level1.rounds[0].words;
  container.innerHTML = `
      <div class='play-box'>
        <div class='board-pazzle'>${sentences.map((item: WordsRound, index: number) => `<div class='rounds round${index + 1}'></div>`).join('')}</div>
        <div class='source'>${shuffle(sentences[0].textExample.split(' '))
          .map((item) => `<span class='word'>${item}</span>`)
          .join('')}</div>
      </div>
    `;

  const board = container.querySelector('.board-pazzle') as HTMLDivElement;
  const source = container.querySelector('.source') as HTMLDivElement;
  const currentRound = container.querySelector('.round1') as HTMLDivElement;

  source?.addEventListener('click', (e: Event) => {
    const phrase = board.children[0];
    if (e.target) {
      phrase.append(e.target as HTMLElement);
    }
  });

  currentRound?.addEventListener('click', (e: Event) => {
    if (e.target) {
      source.append(e.target as HTMLElement);
    }
  });

  return container;
}

export default playGame;
