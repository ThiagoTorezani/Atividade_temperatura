function mudarCor(){
    var body = document.querySelector('body');

    var temperatura = parseFloat(document.getElementById('temperatura').value)

    if(temperatura > 0){
        var red = 0 + temperatura;
        var green = 255 - temperatura;
        var blue = 0;
        var alpha = 0.5;
    }else{
        var red = 0;
        var green = 255 + temperatura;
        var blue = 0 - temperatura;
        var alpha = 0.8;
    }
    
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`

}