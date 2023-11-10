class formaDeBola {
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborMassa} com ${this.saborRecheio}!`)
    }


}

let bolo = new formaDeBola("chocolate", 'nutella')
console.log(bolo)
console.log(bolo.saborMassa)

let bolopremiun = new formaDeBola("baunilha", "coco")
bolopremiun.escrever()