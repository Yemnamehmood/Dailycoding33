"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 33
//TASK 1 (WRITE THE FUNCTION THAT RETRUNS DATE IN THE FORMAT)
// Define a function to get the current date in the format "DD MM YYYY"
function getCurrentDate() {
    // Create a new Date object representing the current date and time
    let today = new Date();
    // Extract the day component from the Date object, ensuring it has two digits
    let day = String(today.getDate()).padStart(2, '0');
    // Extract the month component from the Date object, adding 1 since months are zero-based,
    // and ensuring it has two digits
    let month = String(today.getMonth() + 1).padStart(2, '0');
    // Extract the year component from the Date object
    let year = today.getFullYear();
    // writing the day, month, and year components into the desired format
    return `${day} ${month} ${year}`;
}
// Define a function to print the current date to the console
function printCurrentDate() {
    // Call getCurrentDate to get the current date
    const currentDate = getCurrentDate();
    // Log current date to the console
    console.log("Today's Date:", currentDate);
}
// Call function to print the current date
printCurrentDate();
//TASK 2 (Creating javaScript snippet that caulculates and logs how many days are left until New year)
function daysUntilNewYear() {
    // Get the current date
    let today = new Date();
    // Get the next New Year's date
    let nextYear = today.getFullYear() + 1;
    let newYearDate = new Date(nextYear, 0, 1);
    // Calculate the difference in milliseconds between the current date and New Year's date
    let differenceInMilliseconds = newYearDate.getTime() - today.getTime();
    // Convert milliseconds to days
    let daysLeft = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    // Log the result
    console.log(`There are ${daysLeft} days left until New Year's Day of the next year.`);
}
// Call the function to calculate and log the result
daysUntilNewYear();
//TASK 3 (Generate a date object representing your next birthday and log it to the console)
function getNextBirthday(month, day) {
    //Get the current Date 
    let today = new Date();
    //Get the year 
    let year = today.getFullYear();
    //Calculate the difference 
    let birthday = new Date(year, month - 1, day);
    //using if statement 
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday; //it returs the birthday date 
}
//Replace with birth month and the day
let nextBirthday = getNextBirthday(10, 16); //Example october 16
console.log(" My Next Birthday is on:", nextBirthday.toLocaleDateString());
//Shows the date of the next birthday.
