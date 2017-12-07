console.log('Script linked');

// Keeps track of what is displayed. (Image/Name)
var facebook_displayed = true;

// ES6
var switchDisplay = () => {
  if (facebook_displayed) {
    document.getElementById('facebook').style.display = 'none';
    document.getElementById('name').style.display = 'block';
  } else {
    document.getElementById('facebook').style.display = 'block';
    document.getElementById('name').style.display = 'none';
  }
  facebook_displayed = !facebook_displayed;
};

// Pre-ES6 Function Declaration
// var switchDisplay = function() {
//   if (facebook_displayed) {
//     document.getElementById('facebook').style.display = 'none';
//     document.getElementById('name').style.display = 'block';
//   } else {
//     document.getElementById('facebook').style.display = 'block';
//     document.getElementById('name').style.display = 'none';
//   }
//   facebook_displayed = !facebook_displayed;
// };
