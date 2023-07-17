const HANDLEBARS = require('handlebars');

const SOURCE = `
Hello hi how are you {{friendName}}?
I am doing super uber {{mood}}.
Can you say the same?

Wait, when you are leaving again?
{{time}}? or {{time2}}? 
Please tell me, thank you. 

Yours truly,

    {{myName}}
`;

const RANDOM_TEMPLATE = HANDLEBARS(SOURCE);

let data = {
  friendName: 'Bob',
  mood: 'well',
  time: '12pm',
  time2: '1pm',
  myName: 'Arno',
}

let html = RANDOM_TEMPLATE(data);
console.log(html);