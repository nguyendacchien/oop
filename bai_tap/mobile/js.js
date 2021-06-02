class Mobile{
    constructor(name) {
        this.battery=80;
        this.text= ""
        this.inbox=[]
        this.outbox=[]
        this.status = false
        this.name = name;
    }
    turnOn(){
        if (!this.status){
            this.status=true
        }else {
            alert('Mobile is already on')
        }
    }
    turnOff(){
        if (this.status){
            this.status=false
        }else {
            alert('Mobile is already Off')
        }
    }
    chargeBattery(){
        if (this.battery<100){
            this.battery++
        }
    }
    writeMessage(message){
        if (this.status){
            this.dropBattery()
            this.text = message
        }else {
            alert('Mobile is not on')
        }
    }
    sendMessage(mobile){
        if (this.status){
            this.dropBattery()
            mobile.inbox.push(this.text)
            this.outbox.push(this.text)
            this.text = ''
        }else {
            alert('Mobile is not on')
        }
    }
    getInbox(){
        if (this.status){
            this.dropBattery()
            return this.inbox
        }else {
            alert('Mobile is not on')
        }

    }
    getOutbox(){
        if (this.status){
            this.dropBattery()
            return this.outbox
        }else {
            alert('Mobile is not on')
        }

    }
    dropBattery(){
        this.battery -=2

    }
    getName(){
        return this.name
    }
    displayMobile(){
        return `${this.name} Battery :${this.battery} Status :${this.status}`
    }
}