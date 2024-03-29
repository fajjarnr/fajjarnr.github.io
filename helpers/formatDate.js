const formatDate = (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const [{ value: Fmonth }, , { value: Fdate }, , { value: Fyear }] =
    dtf.formatToParts(d);

  return `${Fdate} ${Fmonth}, ${Fyear}`;
};

export default formatDate;
