var dateFormat = require("dateformat");
function dateFormatter(date) {
  var newDate = dateFormat(date, "dddd, mmmm dS, yyyy");
  return newDate;
}
export {dateFormatter}