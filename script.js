document.addEventListener("keydown", keyDown);
function myFunction() {
    document.getElementById("theParagraph").innerHTML = "Hello World";
    document.getElementById("sticky").src = "https://imgix.ranker.com/user_node_img/50023/1000444553/original/pups-in-a-bucket-of-leaves-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375";
    document.getElementById("theParagraph").style.color = "#11f5f1";
    document.getElementById("theParagraph").style.backgroundColor = "#ff55a3";
}
//

function keyDown(event) {
    if (event.keyCode == 16) {
        let array = document.getElementsByClassName("box");
        let i = 0;
        while (i < array.length) {
            array[i].style.rotate = i * 20 + 10 + "deg";

            i++;
        }

    }

}