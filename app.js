const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return (sleepHours = 8);
    case "tuesday":
      return (sleepHours = 8);
    case "wednesday":
      return (sleepHours = 8);
    case "thursday":
      return (sleepHours = 8);
    case "friday":
      return (sleepHours = 8);
    case "saturday":
      return (sleepHours = 8);
    case "sunday":
      return (sleepHours = 7);
    default:
      console.log("Invalid input");
  }
};

const getActualSleepHours = () => {
  let summ =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return summ;
};

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  //Here we are manipulating the if/else output by changing the getIdealSleepHours value
  let idealSleepHours = getIdealSleepHours(6);

  if (actualSleepHours === idealSleepHours) {
    console.log(`Actual Sleep Hours: ${actualSleepHours}`);
    console.log(`Ideal Sleep Hours: ${idealSleepHours}`);
    console.log(`You got the perfect amount of sleep.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Actual Sleep Hours: ${actualSleepHours}`);
    console.log(`Ideal Sleep Hours: ${idealSleepHours}`);
    console.log(
      `You got more sleep than needed. You are ${
        actualSleepHours - idealSleepHours
      } hour(s) over the perfect amount of sleep.`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`Actual Sleep Hours: ${actualSleepHours}`);
    console.log(`Ideal Sleep Hours: ${idealSleepHours}`);
    console.log(
      `You should get some rest. You are ${
        idealSleepHours - actualSleepHours
      } hour(s) under the perfect amount of sleep.`
    );
  }
};

calculateSleepDebt();
//console.log(getSleepHours("FRiday"));
// console.log(getSleepHours("test")); //cine arunca undefined
//console.log(getActualSleepHours());
