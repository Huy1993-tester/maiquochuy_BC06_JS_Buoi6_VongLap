/**
 * Chương trình in ra số nguyên từ 1 đến giá trị input
 * input 
 * numberbt5 = n 
 * Output ra từ 1 đến n
 */

var n = 0;
var soNguyen = "";
var i = 0;


function btnCount(event) {
    event.preventDefault();
    n = document.getElementById("nhapSoBT5").value;
    do {
        i++;
        soNguyen = soNguyen +" "+ i;
        
    }
    while (i < n);
    document.getElementById("inListnum").innerHTML= "Danh sách số thứ tự là: " + soNguyen;
    return soNguyen;
}
