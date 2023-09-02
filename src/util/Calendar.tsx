import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDates = [];

  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDates.push({
      currentMonth: false,
      date: firstDateOfMonth.subtract(i + 1, 'day'),
    });
  }

  for (let i = 0; i <= lastDateOfMonth.date() - firstDateOfMonth.date(); i++) {
    arrayOfDates.push({
      currentMonth: true,
      date: firstDateOfMonth.date(firstDateOfMonth.date() + i),
      today: firstDateOfMonth.date(firstDateOfMonth.date() + i).isSame(dayjs(), 'day'),
    });
  }

  const remaining = 42 - arrayOfDates.length;

  for (let i = 1; i <= remaining; i++) {
    arrayOfDates.push({
      currentMonth: false,
      date: lastDateOfMonth.add(i, 'day'),
    });
  }

  return arrayOfDates;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
