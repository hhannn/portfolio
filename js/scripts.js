window.onbeforeunload = function(e){
    document.getElementById('photo').className = 'slideLeft';
    document.getElementById('desc').className = 'slideRight';
    document.getElementById('box1').className = 'scaleRightOut';
    document.getElementById('box2').className = 'scaleLeftOut';
    document.getElementById('footer-1').className = 'slideLeft';
    document.getElementById('linkedin').className = 'slideRight';
}

window.onload = function(e){
    document.getElementById('photo').className = 'animate__animated animate__slideInLeft';
    document.getElementById('desc').className = 'animate__animated animate__slideInRight'; 
    document.getElementById('box1').className = 'scaleLeftIn';
    document.getElementById('box2').className = 'scaleRightIn';
    document.getElementById('footer-1').className = 'animate__animated animate__slideInLeft';
    document.getElementById('linkedin').className = 'animate__animated animate__slideInRight'; 
}