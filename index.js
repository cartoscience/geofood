var categories = ["vegetable","carb","protein","method","cuisine"];

/*
var countrySpiceList = {
  American: 'Common spices of the U.S.: ',
  Brazilian: 'Common spices of Brazil: ',
  Chinese: 'Common spices of China: ',
  Ethiopian: 'Common spices of Ethiopia: ',
  French: 'Common spices of France: ',
  German: 'Common spices of Germany: ',
  Ghanaian: 'Common spices of Ghana: ',
  Greek: 'Common spices of Greece: ',
  Indian: 'Common spices of India: ',
  Iranian: 'Common spices of Iran: ',
  Italian: 'Common spices of Italy: ',
  Japanese: 'Common spices of Japan: ',
  Korean: 'Common spices of South Korea: ',
  Malawian: 'Common spices of Malawi: ',
  Mexican: 'Common spices of Mexico: ',
  Moroccan: 'Common spices of Morocco: ',
  Nigerian: 'Common spices of Nigeria: ',
  Peruvian: 'Common spices of Peru: ',
  Spanish: 'Common spices of Spain: ',
  Texan: 'Common spices of Texas: ',
  Thai: 'Common spices of Thailand: ',
  Vietnamese: 'Common spices of Vietnam: '
};
*/

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
            cuisineSelected = x[i].getElementsByClassName("name")[0].innerHTML;
            document.getElementById("country").style.visibility = "visible";
            document.getElementById("country").style.height = "250px";
            document.getElementById("country").style.margin = "10px 10px 0px 10px";
            document.getElementById("countryImage").innerHTML = "<img src='images/"+cuisineSelected+".png'>";
            // document.getElementById("countrySpice").innerHTML = countrySpiceList[cuisineSelected];
          } else {
            x[i].getElementsByClassName("cat")[0].innerHTML = "0";
          }
          if ( random <= 10 ) {
            document.getElementsByClassName("cheese")[0].getElementsByClassName("cat")[0].innerHTML = 1;
          }
        } else {
          document.getElementsByClassName("takeout")[0].getElementsByClassName("cat")[0].innerHTML = 1;
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