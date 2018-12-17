var categories = ["vegetable","carb","protein","method","cuisine"];

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

  if ( event.target.getAttribute('data-filter' ) == 'meal') {
    for (var c = 0; c < categories.length; c++) {
      var x = document.getElementsByClassName(categories[c]);
      var i;
      var count = x.length;
      var rand = Math.floor(Math.random() * count) + 1;
      for (i = 0; i < count; i++) {
        var val = x[i].getElementsByClassName("number")[0].innerHTML;
        x[i].getElementsByClassName("cat")[0].innerHTML = "0";
        if (val == rand) {
          x[i].getElementsByClassName("cat")[0].innerHTML = "1";
        } else {
          x[i].getElementsByClassName("cat")[0].innerHTML = "0";
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