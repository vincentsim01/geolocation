let theLocation=document.getElementById("theLocation");

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(tunjukkanPosisi);
}else{
    theLocation.innerHTML="No Geo Location available";
}

function tunjukkanPosisi(sangPosisi){
    theLocation.innerHTML= "latitude is:"+sangPosisi.coords.latitude+"<br>"+
    "longitude is:"+sangPosisi.coords.longitude;

}

confirm("Do you want to build a snowman")