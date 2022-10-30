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
    console.log(data);
    createCard(data);
  }
})

function createCard(data) {
  list = data;
  for (let i = 0; i < data.length; i++) {
    const cardList = document.getElementById("list");
    const card = document.createElement("li");
    card.className = "card";
    card.id = "card";
    cardList.appendChild(card);

    let name = document.createElement("div");
    name.className = "name";
    name.innerHTML = data[i].name;
    card.appendChild(name);

    let img = document.createElement("img");
    img.className = "img";
    img.src = data[i].icon;
    card.appendChild(img);

    let genre = document.createElement("div");
    genre.className = "genre";
    let genre_array = data[i].genre;
    let genre_string = genre_array[0];
    if (genre_array.length > 0) {
        for (let j = 0; j < genre_array.length; j++) {
          genre_string = genre_string + ", " + genre_array[j]}};
    genre.innerHTML = "ประเภท : "+genre_string;
    card.appendChild(genre);
    
    let description = document.createElement("div");
    description.className = "description";
    description.innerHTML = data[i].description;
    card.appendChild(description);
    
    const obtn = document.createElement("div");
    obtn.className = "outside-btn";
    card.appendChild(obtn);

    const button = document.createElement("button");
    button.className = "btn";
    button.type = "button";
    button.innerHTML = " คลิกเพื่อดูรูปภาพเพิ่มเติม";
    button.setAttribute('onclick', "openPopup(this)");
    button.value = i;
    obtn.appendChild(button);

    const btn_icon = document.createElement("i");
    btn_icon.className = "fa-solid fa-play fa-xl";
    button.insertBefore(btn_icon, button.firstChild);
  }
}

function openPopup(itself) {
  let popup = document.getElementById("popup");
  let value = itself.value;
  let image_array = list[value].images;

  
  let image_group = document.createElement("div")
  image_group.className = "image_group";
  image_group.id = "image_group";

  let noimg = document.createElement("div");
  noimg.innerHTML = "เกมนี้ไม่มีรูปจ้า";
  noimg.style.fontSize = "2rem";
  noimg.style.color = 'red';

  let popup_title = document.createElement("div");
  popup_title.className = "popup_title";
  popup_title.id = "popup_title";
  popup_title.innerHTML = list[value].name;
  popup.insertBefore(popup_title, popup.lastElementChild);
  popup.insertBefore(image_group, popup.lastElementChild);

  if (image_array != null && image_array.length > 0) {
    //ดักกดซ้ำ
    for (let j = 0; j < image_array.length; j++) {
        let image = document.createElement('img');
        image.src = image_array[j];
        image_group.appendChild(image);
      }
    }
    else {
      image_group.appendChild(noimg)
    }

  popup.style.visibility = "visible";
}

function closePopup() {
  let popup_title = document.getElementById("popup_title");
  let image_group = document.getElementById("image_group");
  popup.style.visibility = "hidden";
  popup_title.remove();
  image_group.remove();
}

// -----------------------------------------------------------------------//
fetch("https://gamertocoder.garena.co.th/api/assets")
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
    createList(data);
    console.log(data);
  }
})

function createList(data) {
  mylist = data;
  for (let i = 0; i < Object.keys(mylist).length; i++) {
    const menu = document.getElementById("menu");
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu_div";
    menuDiv.id = Object.keys(mylist)[i];
    menu.appendChild(menuDiv);

    let divdiv = document.getElementById(Object.keys(mylist)[i]);
    let menuName = document.createElement("h1");
    menuName.innerHTML = Object.keys(mylist)[i];
    divdiv.appendChild(menuName);

    for (let j = 0; j < mylist[Object.keys(mylist)[i]].length; j++) {
      let menuList = document.createElement("img");
      menuList.src = mylist[Object.keys(mylist)[i]][j];
      divdiv.appendChild(menuList);
    }
  }
}