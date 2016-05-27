
function changeToMole() {
    var moleId = 'hole' + (1 + Math.floor(Math.random() * 20));
    $('#' + moleId).html('<img src="mole.jpg" class="moleHole">');
}
​
var refreshId = setInterval(changeToMole, 1000);
​
$("#moles").click(function (event) {
    event.target.parentNode.innerHTML = '<img src="mole_hole1.jpg" class="moleHole">';
});
