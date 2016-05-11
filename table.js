/**
 * Created by Chris on 5/5/16.
 */

/*

$(function () {
    // var mole =
    var i = 0;
    var pic = "mole.jpg";
    var el = document.getElementById('mole_hole1.jpg');
    function toggle() {
        el.src = pic[i];
        i = (i + 1) % pic.length;

    }
    setInterval(toggle, 2000);
})();
*/

input = document.getElementById("input");
function start() {
    add = setInterval("input.value++",1000);
}start();