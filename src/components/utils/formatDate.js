const fromDate = (date) => {
  const d = date;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(d));
};

export default fromDate;
