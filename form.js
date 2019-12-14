"use strict";
/*
   
   Function List
   =============
   
   sessionTest()
      Performs a validation test on the selection of the conference session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the registration summary form
*/

// upon loading the window, it will load the anonymous function which will run the following commands:
window.addEventListener("load", function () {
      // run the calcCart command.
      calcCart();
      // runs the onclick event handler for the regSubmit button which will run the sessionTest function
      document.getElementById("regSubmit").onclick = sessionTest;
      // runs the calcCart function when the focus is taken off of these form fields.
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      //upon a change in the sessionBox selection list, it will run the calcCart
      document.getElementById("sessionBox").onchange = calcCart;
      // upon the mediaCB checkbox being clicked, the calcCart function will run
      document.getElementById("mediaCB").onclick = calcCart;
});

function sessionTest() {
      // tests to see if the session box's selected index is equal to negative 1. Because this means that a value has not been selected, it will then... 
      if (sessionBox.selectedIndex === -1) {
            // give a message to select a session package. If one has already been selected...
            sessionBox.setCustomValidity("Select a session package.");
      } else {
            // then it will display a blank message, overwriting the already written value.
            sessionBox.setCustomValidity("");
      }
}

function calcCart() {
      // concatenates the value of the first name and last name box to be the session storage variable confName; allowing data to be stored in the same session. The rest of these "variables", so to speak, follow the same format. 
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;

      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;

      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 25;

      var selectedIndex = document.getElementById("sessionBox").selectedIndex;
      // if the selected index does not equal 1, then this means that
      if (selectedIndex != -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }
      // this looks to see if the checkbox is active; if it is, it will say it is active and give the value to be added to the total cost. otherwise, it will say it is not active and give 0 as a value to be set for the total cost.
      if (document.getElementById("mediaCB").onclick) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 30;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

      writeSessionValues();
}
// this function is able to store the values that are written earlier, which will be able to transfer the data to a different page on a separate session.
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regPack").textContent = sessionStorage.confPack;

      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}