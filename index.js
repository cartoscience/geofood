var categories = ["vegetable","carb","protein","method","cuisine"];

var countryHeaderList = {
  American: 'Common flavors of the U.S.',
  Brazilian: 'Common flavors of Brazil',
  Chinese: 'Common flavors of China',
  Ethiopian: 'Common flavors of Ethiopia',
  French: 'Common flavors of France',
  German: 'Common flavors of Germany',
  Ghanaian: 'Common flavors of Ghana',
  Greek: 'Common flavors of Greece',
  Indian: 'Common flavors of India',
  Iranian: 'Common flavors of Iran',
  Italian: 'Common flavors of Italy',
  Japanese: 'Common flavors of Japan',
  Korean: 'Common flavors of South Korea',
  Malawian: 'Common flavors of Malawi',
  Mexican: 'Common flavors of Mexico',
  Moroccan: 'Common flavors of Morocco',
  Nigerian: 'Common flavors of Nigeria',
  Peruvian: 'Common flavors of Peru',
  Spanish: 'Common flavors of Spain',
  Texan: 'Common flavors of Texas',
  Thai: 'Common flavors of Thailand',
  Vietnamese: 'Common flavors of Vietnam'
};

var countrySpiceList = {
  American: 'Oregano, Basil, Garlic, Sage, Rosemary, Bay Leaf, Cinnamon',
  Brazilian: 'Paprika, Garlic, Onion, Cumin, Coriander',
  Chinese: 'Ginger, Garlic, Scallion, Star Anise, Chili Pepper, Soy',
  Ethiopian: 'Onion, Garlic, Ginger, Cardamom, Cumin, Chili Pepper, Clove, Fenugreek',
  French: 'Parsley, Garlic, Rosemary, Thyme, Oregano, Marjoram, Lavender',
  German: 'Parsley, Thyme, Marjoram, Bay leaf, Caraway, Chives, Dill, Caraway',
  Ghanaian: 'Thyme, Basil, Garlic, Onions, Ginger, Chili Pepper, Nutmeg, Bay Leaf',
  Greek: 'Oregano, Allspice, Cinnamon, Mint, Parsley, Dill',
  Indian: 'Ginger, Turmeric, Cumin, Coriander, Fenugreek, Cardamom, Cinnamon, Chili Pepper',
  Iranian: 'Saffron, Paprika, Nutmeg, Chili Pepper, Coriander, Cinnamon, Cardamom, Clove',
  Italian: 'Oregano, Parsley, Rosemary, Basil, Bay Leaf, Sage, Marjoram, Garlic',
  Japanese: 'Ginger, Wasabi, Sesame, Chili Pepper, Citrus Zest, Soy',
  Korean: 'Sesame, Chili Pepper, Garlic, Ginger, Scallions, Soy',
  Malawian: 'Garlic, Onion, Kambuzi Pepper',
  Mexican: 'Cumin, Garlic, Coriander, Chili Pepper, Paprika, Oregano',
  Moroccan: 'Cumin, Cinnamon, Ginger, Saffron, Turmeric, Paprika',
  Nigerian: 'Curry Powder, Nutmeg, Onion, Chili Pepper',
  Peruvian: 'Coriander, Mint, Basil, Oregano, Huacatay',
  Spanish: 'Paprika, Saffron, Garlic, Oregano, Chili Pepper, Parsley, Rosemary',
  Texan: 'Garlic, Onion, Paprika, Chili Powder, Cumin',
  Thai: 'Ginger, Garlic, Galangal, Thai Basil, Lemongrass, Chili Pepper, Coriander',
  Vietnamese: 'Lemongrass, Ginger, Mint, Garlic, Onion, Coriander, Star Anise, Coriander'
};

var countryInfoList = {
  American: 'Sage is commonly found in dressing (or stuffing) during Thanksgiving in the U.S.',
  Brazilian: 'Coriander is commonly found in feijoada, a popular bean stew of Brazil.',
  Chinese: 'Ginger, garlic, and scallions (GGS) is a common base for many Chinese recipes.',
  Ethiopian: 'Berbere is a popular spice blend in Ethiopia composed of chili peppers, garlic, ginger, fenugreek, and other spices.',
  French: 'Lavendar is somewhat unique to France and is an essential component in the popular spice blend Herbes de Provence.',
  German: 'Caraway seeds are popular in Germany, giving sauerkraut its distinct flavor.',
  Ghanaian: 'Chili peppers, thyme, and ginger can be found in the classic Ghanaian jollof rice.',
  Greek: 'Greek leg of lamb is popularly complemented with a side of mint jelly.',
  Indian: 'Garam masala is a popular spice blend in India composed of coriander seeds, cumin, cardamom, cinnamon, and other spices.',
  Iranian: 'Khoresh Bademjan, an Iranian eggplant and tomato stew, is commonly flavored by saffron, turmeric, and cinnamon.',
  Italian: 'Basil is a staple in Italian cuisine, giving pesto its aromatic flavor and deep green color.',
  Japanese: 'Citrus is an integral ingredient to ponzu sauce, a classic Japanese condiment.',
  Korean: 'Chili peppers make up the popular Korean gochujang, a chili paste often accompanying bibimbap.',
  Malawian: 'The kambuzi pepper is commonly used to spice tomato relish served alongside brai (charcoal grilled meats close to the flame).',
  Mexican: 'Pozole, a Mexican pork and hominy stew, is spiced with ancho, guajillo, and arból chiles.',
  Moroccan: 'In Moroccan cuisine, the tajine (an earthenware cooking vessel) is used to slow cook meats with spices such as turmeric, cumin, and cinnamon.',
  Nigerian: 'The popular Nigerian egusi soup is prepared with melon seeds, onion, and chili peppers.',
  Peruvian: 'Huacatay is an herb native to Peru that is used in a hot stone style cooking called Pachamanca.',
  Spanish: 'Saffron gives Spanish paella its unique yellow color and distinct flavor.',
  Texan: 'Garlic, onion, chili powder, cumin, and chili peppers combine to form the trademark Texas chili.',
  Thai: 'Thai basil is used to fragrance many Thai dishes including kaeng khiao wan (sweet green curry) and many stir fried dishes.',
  Vietnamese: 'Cinnamon, star anise, cardamom, onion, and ginger form the base of the famous Vietnamese phở broth.'
};

var countrySharedList = {
  American: 'Oregano is also popular in France, Greece, Italy, Spain, Mexico, and Peru.',
  Brazilian: 'Coriander is also popular in India, Iran, Mexico, Peru, Thailand, and Vietnam.',
  Chinese: 'Ginger is also popular in Ethiopia, Ghana, India, Japan, South Korea, Morocco, Thailand, and Vietnam.',
  Ethiopian: 'Clove is also popular in Iran.',
  French: 'Marjoram is also popular in Germany and Italy.',
  German: 'Dill is also popular in Greece.',
  Ghanaian: 'Bay leaf is also popular in the U.S., Germany, and Italy.',
  Greek: 'Mint is also popular in Peru and Vietnam.',
  Indian: 'Cardamom is also popular in Ethiopia and Iran.',
  Iranian: 'Cinnamon is also popular in Greece, India, Morocco, and the U.S.',
  Italian: 'Sage is also popular in the U.S.',
  Japanese: 'Soy is also popular in China and South Korea.',
  Korean: 'Sesame is also popular in Japan.',
  Malawian: 'Onion is also popular in Brazil, Ethiopia, Ghana, Nigeria, Texas, and Vietnam.',
  Mexican: 'Cumin is also popular in Brazil, India, Ethiopia, Morocco, and Texas.',
  Moroccan: 'Turmeric is also popular in India.',
  Nigerian: 'Nutmeg is also popular in Ghana and Iran.',
  Peruvian: 'Basil is also popular in the U.S., Ghana, and Italy.',
  Spanish: 'Saffron is also popular in Morocco and Iran.',
  Texan: 'Paprika is also popular in Iran, Mexico, Morocco, Spain, and Brazil.',
  Thai: 'Lemongrass is also popular in Vietnam.',
  Vietnamese: 'Star anise is also popular in China.'
};

var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name'
  }
});

iso.arrange({ sortBy: 'name' })

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  document.getElementById("country").style.visibility = "hidden";
  document.getElementById("country").style.height = "0px";

  if ( event.target.getAttribute('data-filter' ) == 'meal') {

    document.getElementsByClassName("cheese")[0].getElementsByClassName("cat")[0].innerHTML = 0;
    document.getElementsByClassName("takeout")[0].getElementsByClassName("cat")[0].innerHTML = 0;
    var random = Math.floor(Math.random() * 100) + 1;

    for (var c = 0; c < categories.length; c++) {
      var x = document.getElementsByClassName(categories[c]);
      var i;
      var count = x.length;
      var rand = Math.floor(Math.random() * count) + 1;
      for (i = 0; i < count; i++) {
        var val = x[i].getElementsByClassName("number")[0].innerHTML;
        x[i].getElementsByClassName("cat")[0].innerHTML = "0";
        if ( random >= 5 ) {
          if (val == rand) {
            x[i].getElementsByClassName("cat")[0].innerHTML = "1";
            var cuisineSelected = x[i].getElementsByClassName("name")[0].innerHTML;
            document.getElementById("country").style.visibility = "visible";
            document.getElementById("country").style.height = "250px";
            document.getElementById("country").style.margin = "10px 10px 0px 10px";
            document.getElementById("countryImage").innerHTML = "<img src='images/"+cuisineSelected+".png'>";
            document.getElementById("countryHeader").innerHTML = countryHeaderList[cuisineSelected];
            document.getElementById("countrySpice").innerHTML = countrySpiceList[cuisineSelected];
            document.getElementById("countryShared").innerHTML = countrySharedList[cuisineSelected];
            document.getElementById("countryInfo").innerHTML = countryInfoList[cuisineSelected];
            document.getElementById("takeoutText").innerHTML = '';
          } else {
            x[i].getElementsByClassName("cat")[0].innerHTML = "0";
          }
          if ( random <= 10 ) {
            document.getElementsByClassName("cheese")[0].getElementsByClassName("cat")[0].innerHTML = 1;
          }
        } else {
          document.getElementsByClassName("takeout")[0].getElementsByClassName("cat")[0].innerHTML = 1;
          document.getElementById("takeoutText").innerHTML = "Looks like you don't have to cook tonight!";
        }
      }
    }
    
    var filterValue = function( itemElem ) {
      var number = itemElem.querySelector('.cat').innerHTML;
      return number == 1;
    }
  }

  iso.arrange({ filter: filterValue, sortBy: 'name' });

});

var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
