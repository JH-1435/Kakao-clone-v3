const timestamp = document.querySelector(".chat__timestamp");

function getFormatDate(date) {
  var year = date.getFullYear(); // yyyy
  var month = (1 + date.getMonth()); //M
  var day = date.getDate(); // d
  
  month = month >= 10 ? month : '0' + month; // month 두자리로 저장
  day = day >= 10 ? day : '0' + day; // day 두자리로 저장
  
  return month + ' - ' + day + ' - ' + year;
}

var today = getFormatDate(new Date());

timestamp.innerText = today;
