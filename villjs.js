// Initialize and add the map
function initMap() {
    var location = {lat: 37.7749, lng: -122.4194};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: location});
    var marker = new google.maps.Marker({position: location, map: map});
}
var form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
event.preventDefault();
var name = document.getElementById("name").value;
var address = document.getElementById("address").value;
var email = document.getElementById("email").value;
var comments = document.getElementById("comments").value;
var data = {
    name: name,
    address: address,
    email: email,
    comments: comments
};
var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
contacts.push(data);
localStorage.setItem("contacts", JSON.stringify(contacts));
alert("Form data saved to local storage!");
form.reset();
});