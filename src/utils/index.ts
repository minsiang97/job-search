import moment from 'moment';

export const calculateJobPostPeriod = (time: string) => {
  const createdAt = moment(time);
  const differenceInHours = moment().diff(createdAt, 'hours');
  const differenceInDays = moment().diff(createdAt, 'days');

  return `${
    differenceInHours >= 24
      ? differenceInDays > 30
        ? `30+d`
        : `${differenceInDays}d`
      : `${differenceInHours}h`
  } ago`;
};

export const parseCurrencyAmount = (amount: number) => {
  return 'RM ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
