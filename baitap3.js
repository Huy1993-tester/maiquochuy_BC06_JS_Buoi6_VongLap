/**
 * tính giai thừa
 * 
 * input numA = n 
 * tính giai thừa n! = 1*2*3...*n
 * đk : vòng lặp <= n
 * output
 * 
 */





function btnTinhGiaiThua(event) {
    event.preventDefault();
    var i = 1;
    var giaiThua = 1;
    var n = document.getElementById("baiTap3").value;
    while (i <= n) {
        // i++; 120
        giaiThua = giaiThua * i;
        i++;
    }
    document.getElementById("inSoGiaiThua").innerHTML="Kết quả giai thừa của " + n + "!: " + giaiThua;
    return giaiThua;
}




 // i = 0, 0 < 4, 1*1 = 1 ;
 // i = 1, 1 < 4, 2*1 = 2;
// i = 2, 2 < 4, 3*2 = 6;
// i = 3, 3 < 4, 4*6 = 24;
// i = 4, 4 = 4 , 5 * 24 = 120 sai