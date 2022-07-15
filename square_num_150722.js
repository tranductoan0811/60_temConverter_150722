function cal_squareNum(num) {
  var result = num * num;
  return result;
}

function calculate() {
  var num = document.getElementById("input_num").value;
  var result = cal_squareNum(num);

  document.getElementById("result").innerHTML = result;

}
