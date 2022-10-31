let Light = document.getElementById('Light');
let behind = document.getElementById('behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let front = document.getElementById('front');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    Light.style.left = value * 0.25 + 'px';
    behind.style.top = value * 0.5 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';});

fetch("https://gamertocoder.garena.co.th/api/minigames")
.then((response) => {
    if (response.status !== 200) {
        return response.status;
    }
    return response.json();
})
.then((data) => { 
    if (typeof data == "number") {
        alert(data);
    } else {
        createSlide(data);
    }
})

function createSlide(data) {
    list = data;
    for (let i = 0; i < data.length; i++) {
        const slidesDiv = document.getElementById('slides');

        let slide = document.createElement('div');
        slide.id = 'slides_' + (i+1);
        slide.className = 'slide';
        slidesDiv.appendChild(slide);

        let slidess = document.getElementById('slides_'+(i+1));
        let slide_text = document.createElement('span');
        slide_text.id ='slide_text_' + (i+1);
        slide_text.className = 'slide__text';
        slidess.appendChild(slide_text);

        let slide_span = document.getElementById('slide_text_' + (i+1));
        let slide_name = document.createElement('div');
        slide_name.className = 'name';
        slide_name.innerHTML = data[i].name;
        slide_span.appendChild(slide_name);
        
        let slide_img = document.createElement('img');
        slide_img.className = "img";
        slide_img.src = data[i].icon;
        slide_span.appendChild(slide_img);

        let slide_genre = document.createElement('div');
        slide_genre.className = 'genre';
        let genre_array = data[i].genre;
        let genre_string = genre_array[0];
        if (genre_array.length > 0) {
            for (let j = 1; j < genre_array.length; j++) {
            genre_string = genre_string + ", " + genre_array[j]}};
        slide_genre.innerHTML = "ประเภท : "+genre_string;
        slide_span.appendChild(slide_genre);

        let slide_description = document.createElement('div');
        slide_description.className = 'description';
        slide_description.innerHTML = data[i].description;
        slide_span.appendChild(slide_description);

        const obtn = document.createElement("div");
        obtn.className = "outside-btn";
        slide_span.appendChild(obtn);

        const button = document.createElement("button");
        button.className = "btn";
        button.id = "btn"+i;
        button.type = "button";
        button.innerHTML = " คลิกเพื่อเล่นเกม";
        // button.setAttribute('onclick', "window.location.href=");
        button.value = i;
        obtn.appendChild(button);

        const btn_icon = document.createElement("i");
        btn_icon.className = "fa-solid fa-play fa-xl";
        button.insertBefore(btn_icon, button.firstChild);

        let slide_prev = document.createElement('a');
        slide_prev.className = 'slide__prev';
        if ( i === 0 ) {
            slide_prev.href = '#slides_'+ (data.length);
        } else {
            slide_prev.href = '#slides_'+ i;
        }
        slidess.appendChild(slide_prev);

        let slide_next = document.createElement('a');
        slide_next.className ='slide__next';
        if ( i === data.length-1 ) {
            slide_next.href = '#slides_'+ 1;
        } else {
            slide_next.href = '#slides_'+ (i+2);
        }
        slidess.appendChild(slide_next);
    }
    createSlideBubble();
    createButtonHref()
}

function createSlideBubble() {
    for (let i = 0; i < list.length; i++) {
        let slider_nav = document.getElementById("slider_nav");

        let bubble = document.createElement('a');
        bubble.id = 'slides_' + (i+1);
        bubble.className = 'slider__navlink';
        bubble.href = '#slides_' + (i+1);
        slider_nav.appendChild(bubble);
    }
}

function createButtonHref() {
    for (let i = 0; i < list.length; i++) {
        let btnslide = document.getElementById('btn'+i);
        switch ( i ) {
            case 0 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g1046?onlineNumber=48258')")
                break;
            case 1 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g2052?onlineNumber=7864')");
                break;
            case 2 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g2061?onlineNumber=4168')");
                break;
            case 3 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g2060?onlineNumber=1141')");
                break;
            case 4 :
                btnslide.setAttribute('onclick', "window.open('https://blockmango.garena.com/mini_games/article/en/11/')");
                break;
            case 5 :
                btnslide.setAttribute('onclick', "window.open('https://blockmango.garena.com/mini_games/article/en/13/')");
                break;
            case 6 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g1014?onlineNumber=6138')");
                break;
            case 7 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g1042?onlineNumber=1618')");
                break;
            case 8 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g1048?onlineNumber=26565')");
                break;
            case 9 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g1018?onlineNumber=1335')");
                break;
            case 10 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/game-details/g2055?onlineNumber=271')");
                break;
            case 11 :
                btnslide.setAttribute('onclick', "window.open('https://pc.blockmanmobile.com/#/')");
                break;
        }
    }
}
