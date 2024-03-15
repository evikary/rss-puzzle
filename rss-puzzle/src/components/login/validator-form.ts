import './style.css';

export function checkLetters(input: string) {
  const firstLetter = /^[A-Z]/;
  const firstLetterResult = firstLetter.test(input);

  if (firstLetterResult === false) {
    return true;
  }
  return false;
}

export function checkHyphen(input: string) {
  const onlyHyphen = /^[A-Za-z\-]+$/;
  const onlyHyphenResult = onlyHyphen.test(input);

  if (onlyHyphenResult === false) {
    return true;
  }
  return false;
}

export function checklengthName(input: string) {
  const lengthName = /[A-Za-z].{2,}/;
  const lengthNameResult = lengthName.test(input);

  if (lengthNameResult === false) {
    return true;
  }
  return false;
}

export function checklengthSurname(input: string) {
  const lengthSurname = /[A-Za-z].{3,}/;
  const lengthSurnameResult = lengthSurname.test(input);

  if (lengthSurnameResult === false) {
    return true;
  }
  return false;
}

export function deleteTextError() {
  const text = document.querySelector('.error');
  text?.remove();
}

export function nameListener(tag: HTMLInputElement) {
  tag.addEventListener('change', () => {
    if (tag.value) {
      tag.setAttribute('pattern', '-?(?=.*^[A-Z])(?=.*[a-z]+$)(?=.*[A-Za-z]).{3,}');

      if (checkLetters(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML(
          'beforebegin',
          '<p class="error">Первая заглавная, все буквы из английского алфавита</p>'
        );
      } else if (checkHyphen(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML('beforebegin', '<p class="error">Допустимые символы "-"</p>');
      } else if (checklengthName(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML('beforebegin', '<p class="error">Минимальная длина строки 3 символа</p>');
      } else {
        const errors = document.querySelectorAll('.error');
        errors.forEach((error) => {
          error.remove();
        });
      }
    }
  });
}

export function surnameListener(tag: HTMLInputElement) {
  tag.addEventListener('change', () => {
    if (tag.value) {
      tag.setAttribute('pattern', '-?(?=.*^[A-Z])(?=.*[a-z]+$)(?=.*[A-Za-z]).{4,}');

      if (checkLetters(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML(
          'beforebegin',
          '<p class="error">Первая заглавная, все буквы из английского алфавита</p>'
        );
      } else if (checkHyphen(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML('beforebegin', '<p class="error">Допустимые символы "-"</p>');
      } else if (checklengthSurname(tag.value)) {
        deleteTextError();
        tag.insertAdjacentHTML('beforebegin', '<p class="error">Минимальная длина строки 4 символа</p>');
      } else {
        const errors = document.querySelectorAll('.error');
        errors.forEach((error) => {
          error.remove();
        });
      }
    }
  });
}
