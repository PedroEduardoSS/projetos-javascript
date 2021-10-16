class Phone {
    constructor(color = 'black'){
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff() {
        if(this.isOn){
            console.log('desligar');
        } else {
            console.log('ligar');
        }
        this.isOn = !this.isOn;
    }
}

const phone = new Phone('white');