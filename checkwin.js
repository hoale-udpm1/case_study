//checkwin
function checkWin(){
    let winner = false;
    let winString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0";
    let loseString = "1,2,3,4,5,6,7,8,9,10,11,12,13,15,14,0";

    var matrixStr = matrix.toString();

    if(winString == matrixStr) {
        clearTimeout(timer);
        let temp = document.getElementById("board-time").innerText;
        document.getElementById("alert_puzzle").innerText = "Bạn đã chiến thắng. Kỷ lục của bạn là " + temp;

    } else if (loseString == matrixStr) {
        document.getElementById("alert_puzzle").innerText = "Bạn đã thua. Ấn nút \"click to play\" để chơi game mới"
    }
}
