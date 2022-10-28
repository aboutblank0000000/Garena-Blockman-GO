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
        card.className = "card"
        card.id = "card"
        list.appendChild(card);

        let name = document.createElement("div");
        name.className = "name";
        name.innerHTML = data[i].name;
        card.appendChild(name);
    }
    
  }
})