const daysToAdd = 0

const daysInAWeek = 7

let today = new Date(Date.now() );
 today.setDate(today.getDate() + daysToAdd);
let todays_date_number = today.getDay()

let yesterday = new Date();
let tomorrow = new Date();

let weekFromToday = new Date( );
let threeDaysFromToday = new Date( );
let twoDaysFromToday = new Date( );
weekFromToday.setDate(today.getDate() + daysInAWeek);
threeDaysFromToday.setDate(today.getDate() + 3);
twoDaysFromToday.setDate(today.getDate() + 2);

/**Days To Add Testing**/
console.log(todays_date_number)

todays_date_number = todays_date_number + daysToAdd
tomorrow.setDate(tomorrow.getDate() + daysToAdd);
threeDaysFromToday.setDate(threeDaysFromToday.getDate() + daysToAdd);
twoDaysFromToday.setDate(today.getDate() + daysToAdd);
weekFromToday.setDate(weekFromToday.getDate() + daysToAdd);
yesterday.setDate(today.getDate() - daysToAdd);


export default today