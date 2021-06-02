class Hero {
    constructor(image, y, x, size) {
        this.image = image;
        this.y = y;
        this.x = x;
        this.size = size;
    }

    getHero() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.y + 'px; left:' + this.x + 'px;position:absolute;" />';
    }
    moveRight(){
        this.x+=5;

    }
}
let hero = new  Hero("pikachu.png",20,30,200)
function start(){
    if (hero.x<window.innerWidth-hero.size){
        hero.moveRight()
    }
    document.getElementById('game').innerHTML=hero.getHero()
    setTimeout(start,500)
}
start()