/***
 * Viết chương trình tìm số nguyên nhỏ nhất
 * 
 * Input 
 * điều kiện
 *  n = n + i > 10000
 * tìm số nhỏ nhất
 * 
 */

function tinhSN() {
    
    for (var n = 0; n <= 10000; n++) {
         n  += n;
        console.log(n);
    }
    
    return (n);
}
console.log(tinhSN());


