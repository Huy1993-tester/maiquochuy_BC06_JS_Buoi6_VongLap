/**
 * Viết chương trình tạo ra thẻ div
 * input nhấn button 
 * create 10 thẻ div
 * soChan = bg-danger
 * soLe = bg-info 
 * Output ra màn hình
 * 
 */
var kq;
function btnCreate(event) {
    event.preventDefault();
    kq = taoMau();

    return (kq);
}

var countClick = 0;
function taoMau() {
    var createDiv = "";
    countClick += 1;
    if (countClick <= 10) {
        for (var i = 1; i <= countClick; i++) {
            createDiv = createDiv + "<div> Thẻ div </div>";
            document.getElementById("addThe").innerHTML = createDiv;
            document.getElementById("addThe").style.color = "white";
        }
    }
    return;
}

function btnRest() {
    countClick = 0;
    document.getElementById("addThe").innerHTML = "";
}
// function btnRest(){
//     var child = document.getElementById("addThe");
//     child.parentNode.removeChild(child);
//     return child;
// }