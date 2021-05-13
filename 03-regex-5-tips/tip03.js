const dateRegex = /(?<year>[0-9]{4})-(?<mounth>[0-9]{2})-(?<day>[0-9]{2})/;
const match = dateRegex.exec('2021-05-12');
const { groups } = match;
const { year, mounth, day } = groups;
console.log({
  day,
  mounth,
  year,
});
