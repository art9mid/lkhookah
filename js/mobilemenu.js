"use strict";

function modalFunction(popup) {
  var modal = document.querySelector(".".concat(popup));
  var information = document.querySelector('[data-debuger]').dataset.debuger;
  return {
    open: function open() {
      if (information && information != NaN) {
        modal.style.left = '0';
        modal.style.right = '0';
        information = false;
      } else {
        return;
      }
    },
    close: function close() {
      if (!information && information != NaN) {
        modal.style.left = '-100%';
        modal.style.right = '100%';
        information = true;
      } else {
        return;
      }
    }
  };
}

var mobilemenu = modalFunction('menu_popup');

function openClose(open, close) {
  var openBtn = document.querySelector(open);
  var closeBtn = document.querySelector(close);
  openBtn.addEventListener('click', function (event) {
    event.preventDefault();
    mobilemenu.open();
  });
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    mobilemenu.close();
  });
}

openClose('#mobileMenu', '.mobile-menu_close');