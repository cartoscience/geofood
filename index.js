var categories = ["vegetable","carb","protein","method","cuisine"];

var countryHeaderList = {
  American: 'Common flavors used in the U.S.',
  Brazilian: 'Common flavors used in Brazil',
  Chinese: 'Common flavors used in China',
  Ethiopian: 'Common flavors used in Ethiopia',
  French: 'Common flavors used in France',
  German: 'Common flavors used in Germany',
  Ghanaian: 'Common flavors used in Ghana',
  Greek: 'Common flavors used in Greece',
  Indian: 'Common flavors used in India',
  Iranian: 'Common flavors used in Iran',
  Italian: 'Common flavors used in Italy',
  Japanese: 'Common flavors used in Japan',
  Korean: 'Common flavors used in South Korea',
  Malawian: 'Common flavors used in Malawi',
  Mexican: 'Common flavors used in Mexico',
  Moroccan: 'Common flavors used in Morocco',
  Nigerian: 'Common flavors used in Nigeria',
  Peruvian: 'Common flavors used in Peru',
  Spanish: 'Common flavors used in Spain',
  Texan: 'Common flavors used in Texas',
  Thai: 'Common flavors used in Thailand',
  Vietnamese: 'Common flavors used in Vietnam'
};

var countrySpiceList = {
  American: 'oregano, basil, garlic, sage, rosemary, bay leaf',
  Brazilian: 'paprika, garlic, onion, cumin, coriander, coriander seed',
  Chinese: 'ginger, garlic, scallion, star anise, chili pepper, cinnamon, soy',
  Ethiopian: 'onion, garlic, ginger, cardamom, cumin, chili pepper, clove',
  French: 'parsley, garlic, rosemary, thyme, oregano, marjoram, lavender',
  German: 'parsley, thyme, marjoram, bay leaf, caraway, chilves, dill, caraway',
  Ghanaian: 'thyme, basil, garlic, onions, ginger, chili pepper, nutmeg, bay leaf',
  Greek: 'oregano, allspice, cinnamon, mint, parsley, dill',
  Indian: 'ginger, turmeric, cumin, coriander, fenugreek, cardamom, cinnamon, chili pepper',
  Iranian: 'paprika, nutmeg, chili pepper, coriander, cinnamon, cardamom, clove',
  Italian: 'oregano, parsley, rosemary, basil, bay leaf, sage, marjoram, garlic',
  Japanese: 'ginger, wasabi, sesame, chili pepper, citrus zest, soy',
  Korean: 'sesame, chili pepper, garlic, ginger, scallions, soy',
  Malawian: 'garlic, onion, kambuzi pepper',
  Mexican: 'cumin, garlic, coriander, chili pepper, paprika, oregano',
  Moroccan: 'cumin, cinnamon, ginger, saffron, turmeric, paprika',
  Nigerian: 'curry powder, nutmeg, onion, chili pepper',
  Peruvian: 'coriander, mint, basil, oregano, chincho',
  Spanish: 'paprika, saffron, garlic, oregano, chili pepper, parsley, rosemary',
  Texan: 'garlic, onion, paprika, chili powder, cumin',
  Thai: 'ginger, garlic, galangal, Thai basil, lemongrass, chili pepper, coriander',
  Vietnamese: 'lemongrass, ginger, mint, garlic, onion, coriander, star anise, coriander'
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
