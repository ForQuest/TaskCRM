'use strict';

Date.prototype.toFormatString = function(format = '%y-%m-%dT%H:%M:%S.%MsZ') {
  var f = { y : this.getUTCFullYear(),
            m : this.getUTCMonth() + 1,
            d : this.getUTCDate(),
            H : this.getUTCHours(),
            M : this.getUTCMinutes(),
            S : this.getUTCSeconds(),
            Ms : this.getUTCMilliseconds()
          }
  for(let k in f)
    format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
  return format;
};

Date.prototype.toFormatLocale = function(type, locale = 'RU-ru') {
  let textDay = Array();
  let textMonth = Array();
  let textYear = Array();
  switch(locale){
    case 'EN-en':
    case 'RU-ru':
    default:
      textDay = ['день','дня','дней'];
      textMonth = ['месяц','месяца','месяцев'];
      textYear = ['год','года','лет'];
      break;
  }
  let date = 0;
  switch(type){
    case 'day':
      date = this.getUTCDate() - 1;
      switch(date){
        case 1:
          return date+' '+textDay[0];
        break;
        case 2:
        case 3:
        case 4:
          return date+' '+textDay[1];
        break;
        case 5:
          return date+' '+textDay[2];
        break;
        default:
        return '';
      }
    break;
    case 'month':
      date = this.getUTCMonth();
      switch(date){
        case 1:
          return date+' '+textMonth[0];
        break;
        case 2:
        case 3:
        case 4:
          return date+' '+textMonth[1];
        break;
        case 5:
          return date+' '+textMonth[2];
        break;
        default:
        return '';
      }
    break;
    case 'year':
      date = this.getUTCFullYear() - 1970;
      switch(date){
        case 1:
          return date+' '+textYear[0];
        break;
        case 2:
        case 3:
        case 4:
          return date+' '+textYear[1];
        break;
        case 5:
          return date+' '+textYear[2];
        break;
        default:
        return '';
      }
    break;
    default:
    return '';
  }
};