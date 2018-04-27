'use strict';
(function () {

  // pin creating -------------------------------------------------------------

  window.renderPins = function (adCardsData) {
    var fragment = document.createDocumentFragment();
    var template = document.querySelector('.map__pins');
    var similarPinElement = document.querySelector('template').content.querySelector('.map__pin');
    adCardsData.forEach(function (item) {
      var pinElement = similarPinElement.cloneNode(true);
      pinElement.querySelector('img').src = item.author.avatar;
      pinElement.style = 'left: ' + (item.location.x - 25) + 'px; ' + 'top:' + (item.location.y - 70) + 'px';
      fragment.appendChild(pinElement);
    });
    template.appendChild(fragment);
  };
})();
