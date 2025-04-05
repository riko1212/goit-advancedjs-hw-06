const enum Days {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

const isWeekend = (day: Days) => {
  return day === Days.SATURDAY || day === Days.SUNDAY;
};
