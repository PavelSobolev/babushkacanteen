let firebase = require("firebase");

let Categories = { Soups:0, Mains:1, Sides:2, Salads:3 , Desserts:4 };

let arrOfDishes = [
    {
        id: 101,
        category: Categories.Soups,
        name: "Shchi",
        ingredients: ["fermented cabbage", "pork", "potato"],
        pict: "./assets/img/gallery/shchi.jpg",
        dairyFree: true,
        calories: 477,
        top: false,
        selected: false
    },
    {
        id: 102,
        category: Categories.Soups,
        name: "Borscht",
        ingredients: ["beef", "cabbage", "potato", "beetroot", "carrot", "tomato paste"],
        pict: "./assets/img/gallery/borscht.jpg",
        dairyFree: true,
        calories: 122,
        top: true,
        selected: false
    },
    {
        id: 103,
        category: Categories.Soups,
        name: "Solyanka",
        ingredients: ["beef", "ham", "sausage", "onion", "pickled cucumber", "olives"],
        pict: "./assets/img/gallery/solyanka.jpg",
        dairyFree: true,
        calories: 233,
        top: false,
        selected: false
    },
    {
        id: 104,
        category: Categories.Soups,
        name: "Okroshka",
        ingredients: ["sausage", "cucumber", "potato", "dill", "sour cream"],
        pict: "./assets/img/gallery/okroshka.jpg",
        dairyFree: false,
        calories: 417,
        top: true,
        selected: false
    },
    {
        id: 105,
        category: Categories.Soups,
        name: "Rassolnik",
        ingredients: ["beef", "pickled cucumber", "pearl barley"],
        pict: "./assets/img/gallery/rassolnik.jpg",
        dairyFree: true,
        calories: 137,
        top: false,
        selected: false
    },
    {
        id: 106,
        category: Categories.Soups,
        name: "Sorrel Soup",
        ingredients: ["beef", "sorrel", "potato", "boiled eggs", "sour cream"],
        pict: "./assets/img/gallery/sorrelSoup.jpg",
        dairyFree: false,
        calories: 107,
        top: false,
        selected: false
    },
    {
        id: 107,
        category: Categories.Soups,
        name: "Ukha",
        ingredients: ["fish", "carrot", "potato", "onion"],
        pict: "./assets/img/gallery/ukha.jpg",
        dairyFree: true,
        calories: 204,
        top: false,
        selected: false
    },
    {
        id: 108,
        category: Categories.Soups,
        name: "Frikadeller Soup",
        ingredients: ["minced beef", "potato", "vermicelli", "onion"],
        pict: "./assets/img/gallery/frikadellerSoup.jpg",
        dairyFree: true,
        calories: 158,
        top: false,
        selected: false
    },
    {
        id: 109,
        category: Categories.Soups,
        name: "Kharcho",
        ingredients: ["beef", "rice", "cherry plum", "chopped walnuts"],
        pict: "./assets/img/gallery/kharcho.jpg",
        dairyFree: true,
        calories: 148,
        top: true,
        selected: false
    },
    {
        id: 110,
        category: Categories.Soups,
        name: "Pea Soup",
        ingredients: ["smoked ham ribs", "peas", "potato"],
        pict: "./assets/img/gallery/peaSoup.jpg",
        dairyFree: true,
        calories: 641,
        top: false,
        selected: false
    },
    {
        id: 201,
        category: Categories.Mains,
        name: "Beef Stroganoff",
        ingredients: ["beef", "sour cream", "onion"],
        pict: "./assets/img/gallery/beefStroganoff.jpg",
        dairyFree: false,
        calories: 147,
        top: false,
        selected: false
    },
    {
        id: 202,
        category: Categories.Mains,
        name: "Chicken Kiev",
        ingredients: ["chicken", "butter", "dill"],
        pict: "./assets/img/gallery/chickenKiev.jpg",
        dairyFree: false,
        calories: 290,
        top: false,
        selected: false
    },
    {
        id: 203,
        category: Categories.Mains,
        name: "Pozharsky Cutlet",
        ingredients: ["chicken", "butter"],
        pict: "./assets/img/gallery/pozharskyCutlet.jpg",
        dairyFree: false,
        calories: 190,
        top: true,
        selected: false
    },
    {
        id: 204,
        category: Categories.Mains,
        name: "Veal Orloff",
        ingredients: ["veal", "mushrooms", "onion", "cheese", "mornay sauce"],
        pict: "./assets/img/gallery/vealOrloff.jpg",
        dairyFree: false,
        calories: 246,
        top: true,
        selected: false
    },
    {
        id: 205,
        category: Categories.Mains,
        name: "Cabbage Rolls",
        ingredients: ["beef", "cabbage", "rice", "tomato paste"],
        pict: "./assets/img/gallery/cabbageRolls.jpg",
        dairyFree: true,
        calories: 108,
        top: false,
        selected: false
    },
    {
        id: 206,
        category: Categories.Mains,
        name: "Aspic",
        ingredients: ["pork", "beef", "chicken", "meat broth"],
        pict: "./assets/img/gallery/aspic.jpg",
        dairyFree: true,
        calories: 350,
        top: false,
        selected: false
    },
    {
        id: 207,
        category: Categories.Mains,
        name: "Cutlet",
        ingredients: ["minced pork", "minced beef", "onion"],
        pict: "./assets/img/gallery/cutlet.jpg",
        dairyFree: true,
        calories: 222,
        top: false,
        selected: false
    },
    {
        id: 208,
        category: Categories.Mains,
        name: "Chicken Tabaka",
        ingredients: ["сhicken"],
        pict: "./assets/img/gallery/chickenTabaka.jpg",
        dairyFree: true,
        calories: 233,
        top: false,
        selected: false
    },
    {
        id: 209,
        category: Categories.Mains,
        name: "Greek-Style Fish",
        ingredients: ["fish fillet", " carrot", "onion", "tomato paste"],
        pict: "./assets/img/gallery/greekStyleFish.jpg",
        dairyFree: true,
        calories: 128,
        top: false,
        selected: false
    },
    {
        id: 210,
        category: Categories.Mains,
        name: "Veal Milanese",
        ingredients: ["veal", "eggs"],
        pict: "./assets/img/gallery/vealMilanese.jpg",
        dairyFree: true,
        calories: 251,
        top: false,
        selected: false
    },
    {
        id: 211,
        category: Categories.Mains,
        name: "Gefilte Fish",
        ingredients: ["pike", "eggs", "onion"],
        pict: "./assets/img/gallery/gefilteFish.jpg",
        dairyFree: true,
        calories: 113,
        top: true,
        selected: false
    },
    {
        id: 301,
        category: Categories.Sides,
        name: "Mashed Potato",
        ingredients: ["potato", "butter", "milk"],
        pict: "./assets/img/gallery/mashedPotato.jpg",
        dairyFree: false,
        calories: 88,
        top: true,
        selected: false
    },
    {
        id: 302,
        category: Categories.Sides,
        name: "Rice",
        ingredients: ["rice"],
        pict: "./assets/img/gallery/rice.jpg",
        dairyFree: true,
        calories: 130,
        top: false,
        selected: false
    },
    {
        id: 303,
        category: Categories.Sides,
        name: "Buckwheat Porridge",
        ingredients: ["buckwheat"],
        pict: "./assets/img/gallery/buckwheatPorridge.jpg",
        dairyFree: true,
        calories: 132,
        top: false,
        selected: false
    },
    {
        id: 304,
        category: Categories.Sides,
        name: "Macaroni",
        ingredients: ["pasta"],
        pict: "./assets/img/gallery/macaroni.jpg",
        dairyFree: true,
        calories: 371,
        top: false,
        selected: false
    },
    {
        id: 305,
        category: Categories.Sides,
        name: "Braised Cabbage",
        ingredients: ["cabbage", "carrot", "onion"],
        pict: "./assets/img/gallery/braisedCabbage.jpg",
        dairyFree: true,
        calories: 47,
        top: true,
        selected: false
    },
    {
        id: 306,
        category: Categories.Sides,
        name: "Couscous",
        ingredients: ["semolina", "carrot", "capsicum", "zucchini"],
        pict: "./assets/img/gallery/couscous.jpg",
        dairyFree: true,
        calories: 112,
        top: true,
        selected: false
    },
    {
        id: 401,
        category: Categories.Salads,
        name: "Vinegret",
        ingredients: ["potato", "carrot", "beetroot", "fermented cabbage", "pickled cucumber", "onion", "peas"],
        pict: "./assets/img/gallery/vinegret.jpg",
        dairyFree: true,
        calories: 131,
        top: false,
        selected: false
    },
    {
        id: 402,
        category: Categories.Salads,
        name: "Olivier Salad",
        ingredients: ["potato", "chicken", "pickled cucumber", "onion", "peas", "eggs", "mayonnaise"],
        pict: "./assets/img/gallery/olivierSalad.jpg",
        dairyFree: true,
        calories: 162,
        top: true,
        selected: false
    },
    {
        id: 403,
        category: Categories.Salads,
        name: "Mimosa Salad",
        ingredients: ["canned fish", "potato", "carrot", "onion", "eggs", "mayonnaise"],
        pict: "./assets/img/gallery/mimosaSalad.jpg",
        dairyFree: true,
        calories: 296,
        top: false,
        selected: false
    },
    {
        id: 404,
        category: Categories.Salads,
        name: "Dressed Herring",
        ingredients: ["pickled fish", "potato", "carrot", "beetroot", "carrot", "onion", "mayonnaise"],
        pict: "./assets/img/gallery/dressedHerring.jpg",
        dairyFree: true,
        calories: 209,
        top: true,
        selected: false
    },
    {
        id: 405,
        category: Categories.Salads,
        name: "Caesar Salad",
        ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "chicken", "tomato", "dijon mustard"],
        pict: "./assets/img/gallery/caesarSalad.jpg",
        dairyFree: false,
        calories: 221,
        top: false,
        selected: false
    },
    {
        id: 406,
        category: Categories.Salads,
        name: "Greek Salad",
        ingredients: ["tomato", "cucumber", "feta", "onion", "olives"],
        pict: "./assets/img/gallery/greekSalad.jpg",
        dairyFree: false,
        calories: 87,
        top: true,
        selected: false
    },
    {
        id: 501,
        category: Categories.Desserts,
        name: "Blini",
        ingredients: ["milk", "flour", "sugar"],
        pict: "./assets/img/gallery/blini.jpg",
        dairyFree: false,
        calories: 227,
        top: false,
        selected: false
    },
    {
        id: 502,
        category: Categories.Desserts,
        name: "Oladyi",
        ingredients: ["kefir", "flour", "sugar"],
        pict: "./assets/img/gallery/oladyi.jpg",
        dairyFree: false,
        calories: 206,
        top: true,
        selected: false
    },
    {
        id: 503,
        category: Categories.Desserts,
        name: "Pirozhki",
        ingredients: ["milk", "flour", "sugar", "seasonal fruit"],
        pict: "./assets/img/gallery/pirozhki.jpg",
        dairyFree: false,
        calories: 225,
        top: true,
        selected: false
    },
    {
        id: 504,
        category: Categories.Desserts,
        name: "Syrniki",
        ingredients: ["cottage cheese ", "flour", "eggs", "sugar"],
        pict: "./assets/img/gallery/syrniki.jpg",
        dairyFree: false,
        calories: 274,
        top: false,
        selected: false
    },
    {
        id: 505,
        category: Categories.Desserts,
        name: "Vatrushka",
        ingredients: ["milk", "flour", "sugar", "cottage cheese", "raisins"],
        pict: "./assets/img/gallery/vatrushka.jpg",
        dairyFree: false,
        calories: 331,
        top: false,
        selected: false
    },
    {
        id: 506,
        category: Categories.Desserts,
        name: "Apple Pie",
        ingredients: ["apple", "flour", "sugar", "eggs"],
        pict: "./assets/img/gallery/applePie.jpg",
        dairyFree: true,
        calories: 237,
        top: true,
        selected: false
    }
];

let dishesDb;
function initDatabase() {
   var firebaseConfig = {
      apiKey: "AIzaSyBZwnxTJ2n_HSlQYlWmlo97DXhu2Hthw_w",
      authDomain: "granny-10517.firebaseapp.com",
      databaseURL: "https://granny-10517.firebaseio.com",
      projectId: "granny-10517",
      storageBucket: "granny-10517.appspot.com",
      messagingSenderId: "922121321767",
      appId: "1:922121321767:web:5d9de62dd361db0fd1bd02",
      measurementId: "G-56PKJTL67R"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   dishesDb = firebase.firestore();
}

function addDishes() {
   initDatabase();

   dishesDb.collection("Dishes").get().then((querySnapshot) => {
     
     arrOfDishes.forEach(newDoc => {
      dishesDb.collection("Dishes").doc(new String(newDoc.id)+'').set(newDoc)
          .then(function (docRef) {
              console.log("Document written with ID: ", newDoc.id);
          })
          .catch(function (error) {
              console.error("Error adding document: ", error);
          });
        });
    });
}

addDishes();