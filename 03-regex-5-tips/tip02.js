const text = 'N,.ã_o)d-á';
const regex = /([^A-zÁ-ÿ]|_)/g;
const result = text.replace(regex, '');
console.log({ result });
