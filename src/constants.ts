const moment = require('moment');

export function generatePast10WeeksData() {
  const weeks = [];
  const currentDate = moment().subtract(69, 'days').toDate();

  for (let i = 0; i < 10; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const day = {
        date: moment(currentDate).format('YYYY-MM-DD'),
        value: Math.round(Math.random() * 100) / 100,
      };
      week.push(day);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push({data: week, startDate: week[0].date});
  }
  return weeks;
}
