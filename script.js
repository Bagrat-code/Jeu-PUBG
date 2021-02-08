document.addEventListener('click', function(e) {
    // On a mis un écouteur au document en entier
    // On y a ajoutéé l'évenement CLICK 

    let body = document.querySelector('body');
    // On déclare une variable body, on lui attribue la valeur de l'élement html " body"
    let bullet = document.createElement('span');
    // On déclare une variable bullet, on lui attribue la valeur de l'élement " span " que l'on vient de créer

    let x = e.offsetX;
    // Coordonnée du click sur l'axe horizontal au moment de l'évenement
    let y = e.offsetY;
    // Coordonnée du click sur l'axe vertical au moment de l'évenement

    bullet.style.left = x+"px";
    bullet.style.top = y+"px";

    body.appendChild(bullet);
    //  Faire de bullet l'enfant du body


    let audio = document.getElementById('audio');
    //  On déclare une variabe audio, on stocke l'audio à l'intérieur
    audio.play();


 })

