const apiURL = "/Unit12/hotel.json";

//Async try...catch function to get JSON data
fetch(apiURL)
.then((response) => response.json())
.then((myList) => {
    console.log(myList.hotels);
    let hotelList = myList.hotels;
    hotelList.forEach(hotel => {
        let mainArea = document.querySelector('#display');
        let hotelSec = document.createElement("section");
        let hotelFig = document.createElement("figure");
        let hotelImg = document.createElement("img");
        let hotelName = document.createElement("figcaption");
        let hotelDiv = document.createElement("div");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        hotelImg.src = `/Unit12/assets/${hotel.picture}`;
        hotelName.textContent = hotel.name;
        phone.innerHTML = `<ion-icon name="call" class="icons2"></ion-icon> ${hotel.phoneNum}`;
        address.innerHTML = `<ion-icon name="map" class="icons2"></ion-icon> ${hotel.address}`;
        mainArea.appendChild(hotelSec);
        hotelSec.appendChild(hotelFig);
        hotelFig.appendChild(hotelImg);
        hotelFig.appendChild(hotelName);
        hotelSec.appendChild(hotelDiv);
        hotelDiv.appendChild(address);
        hotelDiv.appendChild(phone);
        hotelDiv.setAttribute('class', "hotel")
      });
});

// function hotelInfo(info) {
//     let loadHotel = info.hotels;
//     loadHotel.forEach(hotel => {
//     let mainArea = document.querySelector('main');
//     let hotelSec = document.createElement("section");
//     let hotelFig = document.createElement("figure");
//     let hotelImg = document.createElement("img");
//     let hotelName = document.createElement("figcaption");
//     let hotelDiv = document.createElement("div");
//     let address = document.createElement("p");
//     let phone = document.createElement("p");
//     hotelImg.src = `/Unit12/assets/${hotel.picture}`;
//     hotelName.textContent = hotel.name;
//     phone.innerHTML = `<ion-icon name="call"></ion-icon> ${hotel.phoneNum}`;
//     address.innerHTML = `<ion-icon name="map"></ion-icon> ${hotel.address}`;
//     mainArea.appendChild(hotelDiv);
//     hotelSec.appendChild(hotelFig);
//     hotelFig.appendChild(hotelImg);
//     hotelFig.appendChild(hotelName);
//     hotelSec.appendChild(hotelDiv);
//     hotelDiv.appendChild(address);
//     hotelDiv.appendChild(phone);
//     hotelDiv.setAttribute('class', "hotel")
//   });
// }




