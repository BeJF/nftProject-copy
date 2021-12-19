window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let card1_Front = document.getElementById("card1_Front");
    let card1_Back = document.getElementById("card1_Back");
    let card2 = document.getElementById("card2");

    if (window.pageYOffset/2 <= 180)
    {
      card1_Front.style.transform = "rotateY(" + window.pageYOffset/2 + "deg)";
      card1_Back.style.transform = "rotateY(" + ((window.pageYOffset/2) -180) + "deg)";
    }
    if (window.pageYOffset/2 <= (180+50) && window.pageYOffset/2 >= 50)
      card2.style.transform = "rotateY(" + ((window.pageYOffset/2)-50)+ "deg)";

}
