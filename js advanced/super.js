class hero{
    constructor(name,hp,damage){
        this.name=name;
        this.hp=hp;
        this.damage=damage;
    }
    trueDamage(damage){
        this.hp -=damage;
    }
    createDamage(hero){
        hero.trueDamage(this.damage);
    }
}
class rangeHero extends hero{
    constructor(name,hp,damage,range){
        super(name,hp,damage);
        this.range=range;
    }
    createDamage(hero){
        super.createDamage(hero);
        this.hp+=this.damage
    }
}
const hero1 = new hero("Quankute",3000,250);
const hero2 = new hero("ThinhRichter",2400,320);
const hero3 = new rangeHero("NhiXinhDep",2200,290,3);
hero1.createDamage(hero2);//hero1 gaay dame len hero 2
hero1.trueDamage(300);//hero1 bi gay dame
hero2.createDamage(hero3);
hero3.createDamage(hero1);
console.log(hero1,hero2,hero3);