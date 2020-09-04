let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
];
//bắt đầu game khi ấn nút play
$("#play").bind("click",function(){
    initialize();
    beginTime();
    //$("#alert_puzzle").text("");
    document.getElementById("alert_puzzle").innerText = "";
})
// Khi click vào 1 sô thì gọi đến hàm move để di chuyển
$("#puzzle .cell-puzzle").bind("click",function() {
    if(secs > 0){
        let obj = $(this);
        move(obj);
    }
})

// hàm init game, gọi 1 dãy số từ 1 đến 15 bất kì, sắp xếp các element theo dãy số đó để bắt đầu game
function initialize(){
    let arrRandomNumber = shuffleMatrix();

    let count = 0;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let number = arrRandomNumber[count];
            matrix[i][j] = number;

            if (i == 3 && j == 3) {
                matrix[i][j] = 0;
            }

            $("#puzzle .cell-puzzle[number=" + number + "]").css("top", i * 60 + "px");
            $("#puzzle .cell-puzzle[number=" + number + "]").css("left", j * 60 + "px");
            count++;
        }
    }
}
// tạo dãy số bất kì từ 1 đến 15
function shuffleMatrix(){
    let arr = [];
    while(arr.length < 15){
        let r = Math.floor(Math.random() * 15) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}
// hàm di chuyển các ô.
function move(obj) {
    let numberCell = parseFloat(obj.attr("number"));
    let win = false;

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(matrix[i][j] == numberCell) {
                if(j > 0 && matrix[i][j-1] == 0) {
                    $("#puzzle .cell-puzzle[number=0]").css("left", j * 60 + "px");
                    obj.animate({
                        'left': (j - 1) * 60 + 'px'
                    }, 300);

                    matrix[i][j - 1] = numberCell;
                    matrix[i][j] = 0;

                } else if(j < 3 && matrix[i][j + 1] == 0) {
                    $("#puzzle .cell-puzzle[number=0]").css("left",j * 60 + "px");
                    obj.animate({
                        'left': (j + 1) * 60 + 'px'
                    }, 300);

                    matrix[i][j + 1] = numberCell;
                    matrix[i][j] = 0;

                } else if(i > 0 && matrix[i - 1][j] == 0) {
                    $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
                    // puzzle.style.top = 1 * 60 +"px";
                    obj.animate({
                        'top': (i - 1) * 60 + 'px'
                    },300);

                    matrix[i-1][j] = numberCell;
                    matrix[i][j] = 0;

                } else if(i<3 && matrix[i+1][j]==0) {
                    $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
                    obj.animate({
                        'top': (i + 1) * 60 + 'px'
                    },300);

                    matrix[i + 1][j] = numberCell;
                    matrix[i][j]=0;
                }

                win = checkWin();
                if (win){
                    break;
                }

                return;
            }
        }
    }
}