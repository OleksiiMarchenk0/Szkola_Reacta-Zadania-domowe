function dateFormatter(apiDate) {
var standardDate = new Date(apiDate)
var stringData = standardDate.toDateString();
  console.log(stringData);
  return stringData;
}
export {dateFormatter}