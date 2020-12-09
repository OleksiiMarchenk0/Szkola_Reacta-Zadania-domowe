function dateFormatter(apiDate) {
var standardDate = new Date(apiDate)
var stringData = standardDate.toDateString();
  return stringData;
}
export {dateFormatter}