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
    
    for (let i = 0; i < data.length; i++) {
        const list = document.getElementById("list");
        const card = document.createElement("li");
        card.className = "card";
        card.id = "card";
        list.appendChild(card);

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
        if (genre_array.length > 1) {
            for (let j = 1; j < genre_array.length; j++) {
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
        obtn.appendChild(button);

        const btn_icon = document.createElement("i");
        btn_icon.className = "fa-solid fa-play fa-xl";
        button.insertBefore(btn_icon, button.firstChild);
    }
    
  }
})