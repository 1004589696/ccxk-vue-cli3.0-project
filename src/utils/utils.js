// 获取 url 搜索参数 即 ？后的 key 值
export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
}

// 获取 url 搜索参数 即 ？后的 key 值
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//  获取 url 搜索参数 即 ？后的 key 值
export function getUrlQueryString(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 秒数转倒计时
export function remainingTime(isMillis, fmt = "D天hh小时mm分钟ss秒") {
  var tian = Math.floor(isMillis / 1000 / 60 / 60 / 24);
  // if (tian < 10) {
  //     tian = '0' + tian;
  // }
  var hours = Math.floor(
    (isMillis - tian * 24 * 60 * 60 * 1000) / 1000 / 60 / 60
  );
  // if (hours < 10) {
  //     hours = '0' + hours;
  // }
  var minutes = Math.floor(
    (isMillis - tian * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / 1000 / 60
  );
  // if (minutes < 10) {
  //     minutes = '0' + minutes;
  // }
  var seconds = Math.floor(
    (isMillis -
      tian * 24 * 60 * 60 * 1000 -
      hours * 60 * 60 * 1000 -
      minutes * 60 * 1000) /
      1000
  );
  // if (seconds < 10) {
  //     seconds = '0' + seconds;
  // }
  var o = {
    "D+": tian, //日
    "h+": hours, //小时
    "m+": minutes, //分
    "s+": seconds, //秒
  };
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

// 秒数（时间戳转时间）
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

export function formatTime(time, option) {
  time = time * 1000;
  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

export function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

export function isTerminal() {
  let reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
  if (navigator.userAgent.match(reg)) {
    return "mobile";
  } else {
    return "PC";
  }
}

export function isBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  }
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  }
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  }
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  }
  if (
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera
  ) {
    return "IE";
  }
}

export function copyTime(time) {
  var afterTime = time.toISOString();
  return new Date(afterTime);
}
