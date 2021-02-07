/***
 * Viết chương trình tìm số nguyên nhỏ nhất
 * 
 * Input 
 * điều kiện
 *  n = n + i > 10000
 * tìm số nhỏ nhất
 * 
 */
var i = 0;
var n = 0;
function tinhSN() {
    while (n <= 10000) {
        i++
        n = n + i;

    }
    console.log("Khi n lơn hơn 10000 là " + n);
    console.log("Số nguyên nhỏ nhất là = " + i);
    return (n);  
}
console.log(tinhSN())



