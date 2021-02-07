/**
 * viết chương trình tính tổng
 * Input 2 số tính tổng S(n=2) = x^(n =0) + x^(n=1) + x^(n=2) 
 * Output kết quả tổng
 */



function btnTinhTong(event) {
    event.preventDefault();
    var c = tinhTongS();
    document.getElementById("inTongBaiTap2").innerHTML = "Tổng giá trị của x và n là: " + c;
    return (c);
}


var n = 0;
var x = 0;
function tinhTongS() {

    var s = 0;
    x = document.getElementById("baiTap2_input1").value;
    n = document.getElementById("baiTap2_input2").value;
    for (i = 0; i <= n; i++) {
        var a = x ** i;
        s = s + a;
    }
    return (s)
}

// i = 0 , 0 < 2 => 2**0 = 1; i++
// i = 1 , 1 < 2 => 2**1 = 2; i++ 
// i = 2 , 2 = 2 => 2**2 = 4; i++

