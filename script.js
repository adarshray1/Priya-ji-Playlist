let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        cover: 'https://iili.io/2evu86N.jpg',
        name : 'Khuda Bhi',
        artist : 'Mohit Chauhan',
        music : 'mp3/1.mp3'
    },
    {
        cover: "https://iili.io/2evlbyB.jpg",
        name : 'Ek Mulaqat',
        artist : 'Altamash Faridi',
        music : 'mp3/2.m4a'
    },
    {
        cover: "https://iili.io/2evUAKv.jpg",
        name : 'Tujhe Sochta Hoon',
        artist : 'KK',
        music : 'mp3/3.mp3'
    },
    {
        cover: "https://iili.io/2evi2iF.jpg",
        name : 'Tu Hi Meri Shab Hai',
        artist : 'KK',
        music : 'mp3/4.mp3'
    },
    {
        cover: "https://iili.io/2evygZG.jpg",
        name : 'Salamat',
        artist : 'Arijit Singh',
        music : 'mp3/5.mp3'
    },
    {
        cover: "https://iili.io/2e82NkB.webp",
        name : 'Dillagi',
        artist : 'Rahat Fateh Ali Khan',
        music : 'mp3/6.mp3'
    },
    {
        cover: "https://iili.io/2e8BR1e.jpg",
        name : 'Dost Banke',
        artist : 'RFAK,Gurnazar',
        music : 'mp3/7.mp3'
    },
    {
        cover: "https://iili.io/2esR7yJ.jpg",
        name : 'Dil Ka Jo Haal Hai',
        artist : 'Abhijeet,Shreya Ghosal',
        music : 'mp3/8.mp3'
    },
    {
        cover: "https://iili.io/2es5SxR.webp",
        name : 'Haule Haule',
        artist : 'Sukhwinder Singh',
        music : 'mp3/9.mp3'
    },
    {
        cover: "https://iili.io/2esYnjf.jpg",
        name: "Mere Naam Tu",
        artist : 'Abhay Jodhpurkar',
        music : 'mp3/10.mp3'
    },
    {
        cover: "https://iili.io/2esMqXe.jpg",
        name : 'Aaj Se Teri',
        artist : 'Amit Trivedi and Arijit Singh',
        music : 'mp3/11.mp3'
    },
    {
        cover: "https://iili.io/2esVnjt.jpg",
        name : 'Aashiqui Aa Gayi',
        artist : 'Arijit Singh',
        music : 'mp3/12.mp3'
    },
    {
        cover: "https://iili.io/2esWqKb.jpg",
        name : 'Bol Na Halke Halke',
        artist : 'Mahalakshmi, RFAK',
        music : 'mp3/13.mp3'
    },
    {
        cover: "https://iili.io/2eLdm1p.jpg",
        name : 'Chal Tere Ishq Mein',
        artist :'Neeti Mohan,Shehnaz Akhtar',
        music : 'mp3/14.mp3'
    },
    {
        cover: "https://iili.io/2eL2LaS.jpg",
        name : 'Chand Sifarish',
        artist :'Kailash Kher,Shaan',
        music : 'mp3/15.mp3'
    },
    {
        cover: "https://iili.io/2eL3DUN.jpg",
        name : 'Jugraafiya',
        artist :'Shreya Ghoshal,Udit Narayan',
        music : 'mp3/16.mp3'
    },
    {
        cover: "https://iili.io/2eLKEy7.jpg",
        name : 'Main Agar Kahoon',
        artist :'Shreya Ghoshal,Sonu Nigam',
        music : 'mp3/17.mp3'
    },
    {
        cover: "https://iili.io/2eLC2cv.jpg",
        name : 'Mareez-E-Ishq',
        artist : 'Arijit Singh',
        music : 'mp3/18.mp3'
    },
    {
        cover: "https://iili.io/2eLnkIS.jpg",
        name : 'Meherbaan',
        artist :'Ash King,Shilpa Rao',
        music : 'mp3/19.mp3'
    },
    {
        cover: "https://iili.io/2esy2ae.jpg",
        name : 'Baarish Ki Jaaye',
        artist : 'B Praak',
        music : 'mp3/20.mp3'
    },
    {
        cover: "https://iili.io/2eLza7j.jpg",
        name : 'Nazar Na Lag Jaaye',
        artist :'Ash King and Sachin–Jigar',
        music : 'mp3/21.mp3'
    },
    {
        cover: "https://iili.io/2eLTSgn.jpg",
        name : 'Pal Pal Dil Ke Paas',
        artist :'Arijit Singh and Parampara Thakur',
        music : 'mp3/22.mp3'
    },
    {
        cover: "https://iili.io/2eLRjbj.jpg",
        name : 'Tujh Mein Rab Dikhta Hai',
        artist : 'Roopkumar Rathod',
        music : 'mp3/23.mp3'
    },
    {
        cover: "https://iili.io/2eL7tHX.jpg",
        name : 'Valam',
        artist :'Arijit Singh,Priya Saraiya',
        music : 'mp3/24.mp3'
    },
    {
        cover: "https://iili.io/2eL0frQ.jpg",
        name : 'Tere Mast Mast Do Nain',
        artist :'Rahat Fateh Ali Khan',
        music : 'mp3/25.mp3'
    },
    {
        cover: "https://iili.io/2eLGIj9.jpg",
        name : 'Dagabaaz Re',
        artist :'RFAK, and Shreya Ghoshal',
        music : 'mp3/26.mp3'
    },
    {
        cover: "https://iili.io/2eLH1vn.jpg",
        name : 'Tu Jo Hain',
        artist :'Ankit Tiwari',
        music : 'mp3/27.mp3'
    },
    {
        cover: "https://iili.io/2SQNnLX.jpg",
        name : 'Aasan Nahin Yahan',
        artist :'Arijit Singh',
        music : 'mp3/28.mp3'
    },
    {
        cover: "https://iili.io/2SQe5W7.jpg",
        name : 'Baarish',
        artist :'Gajendra Verma,Mohammed Irfan',
        music : 'mp3/29.mp3'
    },
    {
        cover: "https://iili.io/2SQ8I5J.jpg",
        name : 'Baatein Ye Kabhi Na',
        artist :' Arijit Singh',
        music : 'mp3/30.mp3'
    },
    {
        cover: "https://iili.io/2SQg8es.jpg",
        name : 'Bulleya',
        artist :'Amit Mishra',
        music : 'mp3/31.mp3'
    },
    {
        cover: "https://iili.io/2SQ6aql.jpg",
        name : 'Dekhte Dekhte',
        artist :'Atif Aslam',
        music : 'mp3/32.mp3'
    },
    {
        cover: "https://iili.io/2SQixNn.jpg",
        name : 'Dil Diyan Gallan',
        artist :'Atif Aslam',
        music : 'mp3/33.mp3'
    },
    {
        cover: "https://iili.io/2SQs4Lb.jpg",
        name : 'Galliyan',
        artist :'Ankit tiwari',
        music : 'mp3/34.mp3'
    },
    {
        cover: "https://iili.io/2SQZd5N.jpg",
        name : 'Ishq Sufiana',
        artist :'Kamal Khan',
        music : 'mp3/35.mp3'
    },
    {
        cover: "https://iili.io/2SQmjup.jpg",
        name : 'Jab Se Tere Naina',
        artist :'Shaan',
        music : 'mp3/36.mp3'
    },
    {
        cover: "https://iili.io/2SZHjgn.jpg",
        name : 'Jashn-E-Bahaaraa',
        artist :'A. R. Rahman,Javed Ali',
        music : 'mp3/37.mp3'
    },
    {
        cover: "https://iili.io/2SZKNd7.jpg",
        name : 'Jee Le Zara',
        artist :'Vishal Dadlan',
        music : 'mp3/38.mp3'
    },
    {
        cover: "https://iili.io/2SZkFHJ.jpg",
        name : 'Jug Jug Jeeve',
        artist :'Sachet Tandon',
        music : 'mp3/39.mp3'
    },
    {
        cover: "https://iili.io/2SZpLu4.jpg",
        name : 'Kabhi Jo Baadal Barse',
        artist :'Arijit Singh',
        music : 'mp3/40.mp3'
    },
    {
        cover: "https://iili.io/2St92gn.jpg",
        name : 'Mat Aazma Re',
        artist :'KK,Pritam Chakraborty',
        music : 'mp3/41.mp3'
    },
    {
        cover: "https://iili.io/2StJXxR.jpg",
        name : 'Mere Rashke Qamar',
        artist :'Nusrat Fateh Ali Khan',
        music : 'mp3/42.mp3'
    },
    {
        cover: "https://iili.io/2St273P.jpg",
        name : 'Naam Hai Tera Tera',
        artist :'Himesh Reshammiya',
        music : 'mp3/43.mp3'
    },
    {
        cover: "https://iili.io/2StFvEl.jpg",
        name : 'Saaiyan',
        artist :'Shahid Mallya',
        music : 'mp3/44.mp3'
    },
    {
        cover: "https://iili.io/2StfdH7.jpg",
        name : 'Samjho Na',
        artist :'Himesh Reshammiya',
        music : 'mp3/45.mp3'
    },
    {
        cover: "https://iili.io/2StCTRS.jpg",
        name : 'Sanam Re',
        artist :'Arijit Singh',
        music : 'mp3/46.mp3'
    },
    {
        cover: "https://iili.io/2StxMe2.jpg",
        name : 'Saude Bazi',
        artist :'Anupam Amod',
        music : 'mp3/47.mp3'
    },
    {
        cover: "https://iili.io/2StTo0u.jpg",
        name : 'Sun Saathiyan',
        artist :'Priya Saraiya,Divya Kumar ',
        music : 'mp3/48.mp3'
    },
    {
        cover: "https://iili.io/2SQNnLX.jpg",
        name : 'Sunn Raha Hain Na',
        artist :'Ankit Tiwari',
        music : 'mp3/49.mp3'
    },
    {
        cover: "https://iili.io/2StfdH7.jpg",
        name : 'Tera Mera Milna',
        artist :'Himesh Reshammiya,Shreya Ghosha',
        music : 'mp3/50.mp3'
    },
    {
        cover: "https://iili.io/2StfdH7.jpg",
        name : 'Tera Surroor',
        artist :'Himesh Reshammiya',
        music : 'mp3/51.mp3'
    },
    {
        cover: "https://iili.io/2StaOZv.jpg",
        name : 'Tere Liye',
        artist :'Atif Aslam,Shreya Ghosha',
        music : 'mp3/52.mp3'
    },
    {
        cover: "https://iili.io/2StEUp1.jpg",
        name : 'Teri Jhuki Nazar',
        artist :'Pritam Chakraborty,Shafqat Amanat Ali',
        music : 'mp3/53.mp3'
    },
    {
        cover: "https://iili.io/2StXoHQ.jpg",
        name : 'Teri Yaadon Mein',
        artist :'KK,Shreya Ghoshal',
        music : 'mp3/54.mp3'
    },
    {
        cover: "https://iili.io/2StNiCP.jpg",
        name : 'Tu Hi Hai Aashiqui',
        artist :'Arijit Singh,Palak Muchhal',
        music : 'mp3/55.mp3'
    },
    {
        cover: "https://freeimage.host/i/2Stikxe",
        name : 'Tu Hi Haqeeqat',
        artist :'Pritam Chakraborty,Javed Ali',
        music : 'mp3/56.mp3'
    },
    {
        cover: "https://iili.io/2StfdH7.jpg",
        name : 'Tu Yaad Na Aaye ',
        artist :'Himesh Reshammiya',
        music : 'mp3/57.mp3'
    },
    {
        cover: "https://iili.io/2StZqqg.jpg",
        name : 'Tujhe Bhula diyan',
        artist :'Mohit Chauhan, Shekhar Ravjiani',
        music : 'mp3/58.mp3'
    },
    {
        cover: "https://iili.io/2StbeYG.jpg",
        name : 'tujhe main Pyaar Karu',
        artist :'kailash khair',
        music : 'mp3/59.mp3'
    },
    {
        cover: "https://iili.io/2Styx7s.jpg",
        name : 'Tum Hi Aana',
        artist :'Jubin Nautiyal and Payal Dev',
        music : 'mp3/60.mp3'
    },
    {
        cover: "https://freeimage.host/i/2SD9DUF",
        name : 'Zara Saa',
        artist :'KK',
        music : 'mp3/61.mp3'
    },  
    {
        cover: "https://iili.io/2SDJa4I.jpg",
        name : 'Dil Mein Ho Tum',
        artist :'Armaan Malik, Bappi Lahiri',
        music : 'mp3/62.mp3'
    }, 
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].cover + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
