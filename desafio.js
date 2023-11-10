class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;

        if(this.tipo == "guerrero"){
            ataque = "Espada"
            
        }else if(this.tipo == "mago"){
            ataque = "Magia"

        }else if(this.tipo == "monge"){
            ataque = "Artes marcias"

        }else if(this.tipo == "ninja"){
            ataque = "Shuriken"
        }else {
            ataque = "Soco"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}!`)
    }
}

const hero = new heroi("Higor", 26, "guerrero")
hero.atacar()

