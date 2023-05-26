"use strict";
const mainImg = document.querySelector(".main-img");

const userName = document.querySelector(".name");
const userCity = document.querySelector(".city");
const userCountry = document.querySelector(".country");

const postCodeNumber = document.querySelector(".postcode-number");
const streetName = document.querySelector(".street-name");
const streetNumber = document.querySelector(".street-number");

const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

const generateBtn = document.getElementById("get-new-user");

class RandomUser {
  constructor() {}
  static fetchData = async () => {
    try {
      const url = "https://randomuser.me/api/";
      let getData = await fetch(url);
      let dataJson = await getData.json();
      RandomUser.showUser(dataJson);
    } catch (error) {
      console.error(error);
    }
  };

  static showUser(dataJson) {
    const user = dataJson.results[0];

    mainImg.setAttribute("src", user.picture.large);
    /**/
    userName.innerText = user.name.first + " " + user.name.last;
    /**/
    userCity.innerText = user.location.city;
    userCountry.innerText = user.location.country;
    /**/
    postCodeNumber.innerText = user.location.postcode;
    streetName.innerText = user.location.street.name;
    streetNumber.innerText = user.location.street.number;
    /**/
    phone.innerText = user.phone;
    email.innerText = user.email;
  }
}

/*EVENTS*/
generateBtn.addEventListener("click", () => {
  RandomUser.fetchData();
});

window.addEventListener("load", RandomUser.fetchData());
