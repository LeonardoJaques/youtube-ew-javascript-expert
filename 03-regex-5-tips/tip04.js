const heros = ` NickName: Chapolin, Power: velocidade
Nick: Batman, Power: Money
`;

const exp = /(NickName|Nick):\s(?<nickname>\w.+),\sPower:\s(?<power>\w.*)/gm;

const finalString = heros.replace(
  exp,
  (substring, _, nickname, power, ...args) => {
    return `${nickname} ${power}`;
  }
);

// console.log(finalString);

const resultSingleLine = heros.replace(exp, '$<nickname> $<power>');
console.log(resultSingleLine);
