//click to show dropdown
function myFunction() {
  //gets element ID then changes it from hidden to show
  document.getElementById("dropDown").classList.toggle("show");
}
window.onclick = function(event){ //make sure it's any click outside of the drop button
  if (!event.target.matches('.dropbtn')) {
    var dropDownElements = document.getElementsByClassName("dropContent"); //checks for the content of the dropdown
    var i; //run for loop
    for (i = 0; i < dropDownElements.length; i++) {
      var openDropdown = dropDownElements[i]; //dropDownElements are stored in an array so we have to iterate through
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}