console.log(1);
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < delay) {
      continue;
    }
    console.log("1 加载完了");
  }
sleep(3000)

var year = 1958;
export { year };