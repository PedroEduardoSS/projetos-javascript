const phone = {
    color: "black",
    isOn: true,
    toggleOnOff: function(){
        if(phone.isOn){
            console.log('desligar');
        } else {
            console.log('ligar');
        }
        phone.isOn = !phone.isOn;
    },
}

phone.toggleOnOff()
phone.toggleOnOff()