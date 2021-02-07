/**
 * Chương trình in ra số nguyên từ 1 đến giá trị input
 * input 
 * numberbt5 = n 
 * Output ra từ 1 đến n
 */

var n = 0;
var soNguyen = "";
var i = 0;
var clickBT5 = 0;

function btnCount(event) {
    event.preventDefault();
    n = document.getElementById("nhapSoBT5").value;
    if (n > 0) {
        for (var i = 1; i <= n; i++) {
            soNguyen = soNguyen + " " + i;
            document.getElementById("inListnum").innerHTML = "Danh sách số thứ tự là: " + soNguyen;
            document.getElementById("nutDem").disabled = true;
        }
    } else { document.getElementById("inListnum").innerHTML = "Vui lòng nhập số" }
    return soNguyen;
}
function btnRestBT5() {
    soNguyen="";
    document.getElementById("nhapSoBT5").value = "";
    document.getElementById("inListnum").innerHTML = "";
    document.getElementById("nutDem").disabled = false;
}



