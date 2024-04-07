let nilaiVariabel = localStorage.getItem('nilaiVariabel');
var urlParams = new URLSearchParams(window.location.search);
var level = urlParams.get('level');

var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;
var countBerhasil = 0;

var audio = document.getElementById("theme-song");

function gantiGambar() {
    var gambar = document.getElementById('gambar');
    if (gambar.getAttribute('data-status') === 'on') {
        gambar.src = 'image/soundoff.png'; // Ganti gambar jika sedang menampilkan gambar1
        gambar.setAttribute('data-status', 'off');
        var audio = document.getElementById("theme-song");
        audio.pause();
    } else {
        gambar.src = 'image/soundon.png'; // Kembali ke gambar1 jika sedang menampilkan gambar2
        gambar.setAttribute('data-status', 'on');
        var audio = document.getElementById("theme-song");
        audio.play();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


window.onload = function () {


    if (nilaiVariabel == 0 || level == 1) {
        var image = document.getElementById('image');
        // var image = document.querySelector('.real-image #image');
        image.src = 'image-puzzle/lv-1/10.jpg';
        level1();
    }
    else if (nilaiVariabel == 1 || level == 2) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-2/10.jpg';
        level2();
    }
    else if (nilaiVariabel == 2 || level == 3) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-3/10.jpg';
        level3();
    }
    else if (nilaiVariabel == 3 || level == 4) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-4/10.jpg';
        level4();
    }
    else if (nilaiVariabel == 4 || level == 5) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-5/10.jpg';
        level5();
    }
    else if (nilaiVariabel == 5 || level == 6) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-6/10.jpg';
        level6();
    }
    else if (nilaiVariabel == 6 || level == 7) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-7/10.jpg';
        level7();
    }
    else if (nilaiVariabel == 7 || level == 8) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-8/10.jpg';
        level8();
    }
    else if (nilaiVariabel == 8 || level == 9) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-9/10.jpg';
        level9();
    }
    else if (nilaiVariabel == 9 || level == 10) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-10/10.jpg';
        level10();
    }
    else if (nilaiVariabel == 10 || level == 11) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-11/10.jpg';
        level11();
    }
    else if (nilaiVariabel == 11 || level == 12) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-12/10.png';
        level12();
    }
    else if (nilaiVariabel == 12 || level == 13) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-13/10.jpg';
        level13();
    }
    else if (nilaiVariabel == 13 || level == 14) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-14/10.jpg';
        level14();
    }
    else if (nilaiVariabel == 14 || level == 15) {
        var image = document.getElementById('image');
        image.src = 'image-puzzle/lv-15/10.jpg';
        level15();
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //saat gambar di klik untuk di pindah
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //saat gambar di pindah
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;


    var board = document.getElementById("board");
    var images = board.querySelectorAll("img");
    var imageFiles = [];

    images.forEach(function (img) {
        var src = img.getAttribute("src");
        var parts = src.split("/");
        var fileName = parts[parts.length - 1];
        imageFiles.push(fileName);
    });

    var expectedFiles = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg"
    ];

    var allImagesInOrder = true;

    for (var i = 0; i < expectedFiles.length; i++) {
        if (imageFiles[i] !== expectedFiles[i]) {
            allImagesInOrder = false;
            break;
        }
    }

    if (allImagesInOrder) {
        alert("Yeayy, semua susunannya benar!");
        window.location.href = "level.html";
        if (nilaiVariabel == 0) {
            localStorage.setItem('nilaiVariabel', 1);
        }
        if (nilaiVariabel == 1) {
            localStorage.setItem('nilaiVariabel', 2);
        }
        if (nilaiVariabel == 2) {
            localStorage.setItem('nilaiVariabel', 3);
        }
        if (nilaiVariabel == 3) {
            localStorage.setItem('nilaiVariabel', 4);
        }
        if (nilaiVariabel == 4) {
            localStorage.setItem('nilaiVariabel', 5);
        }
        if (nilaiVariabel == 5) {
            localStorage.setItem('nilaiVariabel', 6);
        }
        if (nilaiVariabel == 6) {
            localStorage.setItem('nilaiVariabel', 7);
        }
        if (nilaiVariabel == 7) {
            localStorage.setItem('nilaiVariabel', 8);
        }
        if (nilaiVariabel == 8) {
            localStorage.setItem('nilaiVariabel', 9);
        }
        if (nilaiVariabel == 9) {
            localStorage.setItem('nilaiVariabel', 10);
        }
        if (nilaiVariabel == 10) {
            localStorage.setItem('nilaiVariabel', 11);
        }
        if (nilaiVariabel == 11) {
            localStorage.setItem('nilaiVariabel', 12);
        }
        if (nilaiVariabel == 12) {
            localStorage.setItem('nilaiVariabel', 13);
        }
        if (nilaiVariabel == 13) {
            localStorage.setItem('nilaiVariabel', 14);
        }
        if (nilaiVariabel == 14) {
            localStorage.setItem('nilaiVariabel', 15);
        }

    } else {
        console.log("Tidak semua gambar ada pada urutan yang benar.");
    }
}

function level1() {
    


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            countBerhasil++;
            //<img>
            let tile = document.createElement("img");
            if (nilaiVariabel > 0) {
                tile.src = "./image-puzzle/lv-1/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }

            //DRAG FUNCTIONALITY
            // Saat mengklik gambar untuk melakukan penarikan
            tile.addEventListener("dragstart", dragStart);

            // Melakukan penarikan gambar
            tile.addEventListener("dragover", dragOver);

            // Menarik gambar ke dalam gambar lain
            tile.addEventListener("dragenter", dragEnter);

            // Melepaskan gambar yang sedang ditarik dari gambar lain
            tile.addEventListener("dragleave", dragLeave);

            // Menempatkan gambar yang sedang ditarik ke gambar lain
            tile.addEventListener("drop", dragDrop);

            // Setelah menyelesaikan penarikan gambar
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }


    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 0) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-1/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);
        }

    }

    // Timer
    var timerElement = document.getElementById('turns');
    var seconds = 0;
    var timerId;

    function startTimer() {
        var totalTime = 20; // Total waktu dalam detik
        seconds = totalTime; // Mengatur waktu awal sama dengan total waktu
    
        timerId = setInterval(function() {
            seconds--;
            timerElement.textContent = seconds ;
    
            // Cek jika waktu mencapai batas tertentu
            if (seconds <= 0) {
                stopTimer();
                showGameOverPopup();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerId);
    }

    function showGameOverPopup() {
        // Tampilkan pop-up atau pesan game over di sini
        alert('Waktu Habis! Permainan Berakhir.');
        // Atau Anda dapat menggunakan modal pop-up atau mengubah tampilan halaman secara dinamis
    }

    // Mulai timer saat level dimulai
    startTimer();
}

function level2() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 1) {
                tile.src = "./image-puzzle/lv-2/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 1) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-2/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level3() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 2) {
                tile.src = "./image-puzzle/lv-3/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 2) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-3/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level4() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 3) {
                tile.src = "./image-puzzle/lv-4/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 3) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-4/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level5() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 4) {
                tile.src = "./image-puzzle/lv-5/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 4) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-5/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level6() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 5) {
                tile.src = "./image-puzzle/lv-6/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 5) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-6/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level7() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 6) {
                tile.src = "./image-puzzle/lv-7/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 6) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-7/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level8() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 7) {
                tile.src = "./image-puzzle/lv-8/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 7) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-8/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level9() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 8) {
                tile.src = "./image-puzzle/lv-9/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 8) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-9/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level10() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 9) {
                tile.src = "./image-puzzle/lv-10/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "1" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 9) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-10/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level11() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 10) {
                tile.src = "./image-puzzle/lv-11/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            // Saat mengklik gambar untuk melakukan penarikan
            tile.addEventListener("dragstart", dragStart);

            // Melakukan penarikan gambar
            tile.addEventListener("dragover", dragOver);

            // Menarik gambar ke dalam gambar lain
            tile.addEventListener("dragenter", dragEnter);

            // Melepaskan gambar yang sedang ditarik dari gambar lain
            tile.addEventListener("dragleave", dragLeave);

            // Menempatkan gambar yang sedang ditarik ke gambar lain
            tile.addEventListener("drop", dragDrop);

            // Setelah menyelesaikan penarikan gambar
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "1" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 10) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-11/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level12() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 11) {
                tile.src = "./image-puzzle/lv-12/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "1" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 11) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-12/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level13() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 12) {
                tile.src = "./image-puzzle/lv-13/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "1" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 12) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-13/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level14() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 13) {
                tile.src = "./image-puzzle/lv-14/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "1" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 13) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-14/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}

function level15() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            countBerhasil++;

            let tile = document.createElement("img");
            if (nilaiVariabel > 14) {
                tile.src = "./image-puzzle/lv-15/" + countBerhasil + ".jpg";
            } else {
                tile.src = "./image-puzzle/blank.jpg";
            }
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); //meletakkan gambar "0" sampai "9"
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }



    for (let i = 0; i < pieces.length; i++) {
        if (nilaiVariabel > 14) {
        } else {
            let tile = document.createElement("img");
            tile.src = "./image-puzzle/lv-15/" + pieces[i] + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("pieces").append(tile);

        }

    }
}