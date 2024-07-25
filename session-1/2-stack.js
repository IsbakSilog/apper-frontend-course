class Stack{
    items =[]

    push(string) {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string') {
                this.items.push(arguments[i])
            } else {
                console.error('Please input a string')
            }
        }
    }
    pop(){

        if(this.isEmpty()){
            console.error('Stack is empty')
        }else{
            return this.items.shift()
        }
    }
    isEmpty(){
        return this.items.length === 0
    }
    
    check(){
        if(this.isEmpty()){
            console.error('Stack is empty')
        }else{
            console.log(`Items in stack are: ${this.items}`)
        }
    }
    clear() {
        this.items = [];
        console.log("Queue cleared");
      }
}

const s = new Stack()

s.push('Milk','Donut',41,'Bred')
s.push('Bread')
s.pop()
 s.check()
s.clear()
s.check()
s.pop()
s.push('array','array','array')
s.check()

