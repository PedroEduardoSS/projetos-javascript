function Phone(color = 'black') {
    this.color = color;
    this.isOn = true;
}

Phone.prototype.toggleOnOff = () => {
    if(this.isOn){
        console.log('desligar');
    } else {
        console.log('ligar');
    }
    this.isOn = !this.isOn;
}

const phone = new Phone('white');