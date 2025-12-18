class Phone{
  
  private calling;
  private count = 0;
  
  constructor(model) {
    this.model = model
    this.callLog = []
  }
  
  call(who) {
    console.log('Ringing!..')
    Phone.calling = setInterval(() => {
      Phone.count++
      console.log(Phone.count)
    }, 10)
    return this.end;
  }
  
  end() {
    clearInterval(Phone.calling)
    console.log('Call Ended')
  }
  
  checkvoicemail() {
  }
}

console.log(typeof Phone) // Classes are just functions, with additional props
// 

const MercyPhone = new Phone('Iphone');
let endcall = MercyPhone.call();

setTimeout(() => endcall(), 100)

