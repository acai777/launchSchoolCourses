const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

  // filter to only first 120 char for each langiahe 
  let languagesShortened = languages.map(language => {
    let copy = Object.assign({}, language); 
    copy.description = copy.description.slice(0, 120);
    return copy;
  });

document.addEventListener('DOMContentLoaded', () => {
  let languageTemplate = Handlebars.compile(document.querySelector('#language-info').innerHTML);
  let container = document.querySelector('#container');

  // Add the languages, displaying only first 120 char for each paragraph
  container.insertAdjacentHTML("beforeend", languageTemplate({languages: languagesShortened}));

  // event delegation to add event listener 
  container.addEventListener('click', e => {
    e.preventDefault(); 

    let buttonType = e.target.getAttribute('data-type'); 
    let language = e.target.getAttribute('data-language');
    if (buttonType === 'expand') {
      e.target.classList.remove('show');
      e.target.classList.add('hide');
      document.querySelector(`button[data-type="contract"][data-language="${language}"]`).classList.add('show');
      document.querySelector(`button[data-type="contract"][data-language="${language}"]`).classList.remove('hide');

      // Expand the text
      document.querySelector(`p[data-language="${language}"]`).textContent = 
        languages.filter(langObj => langObj.name === language)[0].description; 

    } else if (buttonType === 'contract') {
      e.target.classList.remove('show');
      e.target.classList.add('hide');
      document.querySelector(`button[data-type="expand"][data-language="${language}"]`).classList.add('show');
      document.querySelector(`button[data-type="expand"][data-language="${language}"]`).classList.remove('hide');

      // Restrict the text to first 120 characters
      document.querySelector(`p[data-language="${language}"]`).textContent = 
      languagesShortened.filter(langObj => langObj.name === language)[0].description; 
    }



  });
});









