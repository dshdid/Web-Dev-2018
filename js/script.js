function greet(){
    window.alert("HELLO!!!!!!!!!!!!!!!!!!!!!!!");
}

function init(){
    document.getElementById("first").src = "images/flower2.png";
    /**********************************************************/
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "images/flower1.png";    
    /**********************************************************/
    document.getElementById("t3").innerHTML = 'Your are doing great!';
    /**********************************************************/
    let image = document.getElementById("new_element"), 
    imagechild = document.createElement("img");
    image.appendChild(imagechild).src = "images/flower2.png";
    /**********************************************************/
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow", "green", "blue", "purpule", "pink"];
    
    for (var i = spans.length - 1; i >= 0; i--) {
	   spans[i].style.color = colors[i];
    }   
    /**********************************************************/
    var changeSrc = function(event) {
    if (event.target.src) {
        event.target.src = "images/flower2.png";
        let filename = event.target.src.replace(/^.*[\\\/]/, '');
    }
    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);


}








    