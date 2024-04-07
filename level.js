let nilaiVariabel = localStorage.getItem('nilaiVariabel');
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

    function resetLevel() {
        var id = document.getElementById('btn-reset-level')
        if (id.getAttribute('data-status') == 'on') {
            localStorage.setItem('nilaiVariabel', 0);
            window.location.reload();
        }

    }


    window.onload = function () {
        console.log(nilaiVariabel);
        if (nilaiVariabel == null) {
            localStorage.setItem('nilaiVariabel', 0);
        }

        //level 1
        if (nilaiVariabel == 0) {
            var level2 = document.getElementById('link2');
            var level3 = document.getElementById('link3');
            var level4 = document.getElementById('link4');
            var level5 = document.getElementById('link5');
            var level6 = document.getElementById('link6');
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            level2.removeAttribute('href');
            level3.removeAttribute('href');
            level4.removeAttribute('href');
            level5.removeAttribute('href');
            level6.removeAttribute('href');
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 2
        if (nilaiVariabel == 1) {
            var level3 = document.getElementById('link3');
            var level4 = document.getElementById('link4');
            var level5 = document.getElementById('link5');
            var level6 = document.getElementById('link6');
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            var image = document.getElementById('gambar2');
            image.src = 'image/lv2.png';

            level3.removeAttribute('href');
            level4.removeAttribute('href');
            level5.removeAttribute('href');
            level6.removeAttribute('href');
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 3
        if (nilaiVariabel == 2) {
            var level4 = document.getElementById('link4');
            var level5 = document.getElementById('link5');
            var level6 = document.getElementById('link6');
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';

            level4.removeAttribute('href');
            level5.removeAttribute('href');
            level6.removeAttribute('href');
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 4
        if (nilaiVariabel == 3) {
            var level5 = document.getElementById('link5');
            var level6 = document.getElementById('link6');
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';

            level5.removeAttribute('href');
            level6.removeAttribute('href');
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }
        
        //level 5
        if (nilaiVariabel == 4) {
            //mendapatkan link level
            var level6 = document.getElementById('link6');
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';

            //untuk menghapus larangan klik level terkunci
            level6.removeAttribute('href');
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 6
        if (nilaiVariabel == 5) {
            //mendapatkan link level
            var level7 = document.getElementById('link7');
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';

            //untuk menghapus larangan klik level terkunci
            level7.removeAttribute('href');
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 7
        if (nilaiVariabel == 6) {
            //mendapatkan link level
            var level8 = document.getElementById('link8');
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';

            //untuk menghapus larangan klik level terkunci
            level8.removeAttribute('href');
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 8
        if (nilaiVariabel == 7) {
            //mendapatkan link level
            var level9 = document.getElementById('link9');
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';

            //untuk menghapus larangan klik level terkunci
            level9.removeAttribute('href');
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 9
        if (nilaiVariabel == 8) {
            //mendapatkan link level
            var level10 = document.getElementById('link10');
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';

            //untuk menghapus larangan klik level terkunci
            level10.removeAttribute('href');
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 10
        if (nilaiVariabel == 9) {
            //mendapatkan link level
            var level11 = document.getElementById('link11');
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';

            //untuk menghapus larangan klik level terkunci
            level11.removeAttribute('href');
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 11
        if (nilaiVariabel == 10) {
            //mendapatkan link level
            var level12 = document.getElementById('link12');
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            var image11 = document.getElementById('gambar11');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';
            image11.src = 'image/lv11.png';

            //untuk menghapus larangan klik level terkunci
            level12.removeAttribute('href');
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 12
        if (nilaiVariabel == 11) {
            //mendapatkan link level
            var level13 = document.getElementById('link13');
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            var image11 = document.getElementById('gambar11');
            var image12 = document.getElementById('gambar12');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';
            image11.src = 'image/lv11.png';
            image12.src = 'image/lv12.png';

            //untuk menghapus larangan klik level terkunci
            level13.removeAttribute('href');
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 13
        if (nilaiVariabel == 12) {
            //mendapatkan link level
            var level14 = document.getElementById('link14');
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            var image11 = document.getElementById('gambar11');
            var image12 = document.getElementById('gambar12');
            var image13 = document.getElementById('gambar13');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';
            image11.src = 'image/lv11.png';
            image12.src = 'image/lv12.png';
            image13.src = 'image/lv13.png';

            //untuk menghapus larangan klik level terkunci
            level14.removeAttribute('href');
            level15.removeAttribute('href');
        }

        //level 14
        if (nilaiVariabel == 13) {
            //mendapatkan link level
            var level15 = document.getElementById('link15');

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            var image11 = document.getElementById('gambar11');
            var image12 = document.getElementById('gambar12');
            var image13 = document.getElementById('gambar13');
            var image14 = document.getElementById('gambar14');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';
            image11.src = 'image/lv11.png';
            image12.src = 'image/lv12.png';
            image13.src = 'image/lv13.png';
            image14.src = 'image/lv14.png';

            //untuk menghapus larangan klik level terkunci
            level15.removeAttribute('href');
        }

        //level 15
        if (nilaiVariabel == 14) {
            //mendapatkan link level

            //untuk membuka gambar level
            var image2 = document.getElementById('gambar2');
            var image3 = document.getElementById('gambar3');
            var image4 = document.getElementById('gambar4');
            var image5 = document.getElementById('gambar5');
            var image6 = document.getElementById('gambar6');
            var image7 = document.getElementById('gambar7');
            var image8 = document.getElementById('gambar8');
            var image9 = document.getElementById('gambar9');
            var image10 = document.getElementById('gambar10');
            var image11 = document.getElementById('gambar11');
            var image12 = document.getElementById('gambar12');
            var image13 = document.getElementById('gambar13');
            var image14 = document.getElementById('gambar14');
            var image15 = document.getElementById('gambar15');
            image2.src = 'image/lv2.png';
            image3.src = 'image/lv3.png';
            image4.src = 'image/lv4.png';
            image5.src = 'image/lv5.png';
            image6.src = 'image/lv6.png';
            image7.src = 'image/lv7.png';
            image8.src = 'image/lv8.png';
            image9.src = 'image/lv9.png';
            image10.src = 'image/lv10.png';
            image11.src = 'image/lv11.png';
            image12.src = 'image/lv12.png';
            image13.src = 'image/lv13.png';
            image14.src = 'image/lv14.png';
            image15.src = 'image/lv15.png';

            //untuk menghapus larangan klik level terkunci

        }
    }