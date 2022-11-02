function formatDate(date, format) {
    const map = {
        mm: (date.getMonth() + 1)<10?'0'+date.getMonth() + 1:date.getMonth() + 1,
        dd: date.getDate()<10?'0'+date.getDate():date.getDate(),
        yy: date.getFullYear().toString(),
        yyyy: date.getFullYear()
    }
  
    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
  }

  export default formatDate