 <script>
        var coll = document.getElementsByClassName("category");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.maxHeight){
content.style.maxHeight = null;
} else {
content.style.maxHeight = content.scrollHeight + "px";
}
});
}
function play(file) {
try {
player.api('file',file);
player.api('play');
if (screen.width < 641) {
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
}
}
catch(err) {
alert(err);
}
}
   

    </script>
