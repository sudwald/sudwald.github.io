document.getElementById('btnExpandMobBox1').addEventListener('click', function() {expandMobBox(1)});
document.getElementById('btnCollapseMobBox1').addEventListener('click', function() {collapseMobBox(1)});
document.getElementById('btnExpandMobBox2').addEventListener('click', function() {expandMobBox(2)});
document.getElementById('btnCollapseMobBox2').addEventListener('click', function() {collapseMobBox(2)});
document.getElementById('btnExpandMobBox3').addEventListener('click', function() {expandMobBox(3)});
document.getElementById('btnCollapseMobBox3').addEventListener('click', function() {collapseMobBox(3)});
document.getElementById('btnExpandMobBox4').addEventListener('click', function() {expandMobBox(4)});
document.getElementById('btnCollapseMobBox4').addEventListener('click', function() {collapseMobBox(4)});

//function to hide the popup again on mouseoff
function expandMobBox(num) {
    document.getElementById(`mobBox${num}`).style.height="auto";
    document.getElementById(`btnCollapseMobBox${num}`).style.display="inline";
    document.getElementById(`btnExpandMobBox${num}`).style.display="none";
}

function collapseMobBox(num) {
    document.getElementById(`mobBox${num}`).style.height="15vh";
    document.getElementById(`btnCollapseMobBox${num}`).style.display="none";
    document.getElementById(`btnExpandMobBox${num}`).style.display="inline";
}
