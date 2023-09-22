// math.service.js
module.exports = {
    name: "math",
    actions: {
     async handler(){
        const add=await this.add(4,5)
        const subtract=await this.subtract(4,5)
        const multi=await this.multi(4,5)
        const Divide=await this.Divide(6,2)
     
        console.log(add,subtract,multi,Divide)
        return add,subtract,multi,Divide

        
     }
    },
    methods:{
        add(a,b) {
            return a + b;
          },
          subtract(a,b) {
            return a - b;
          },
          multi(a,b){
            return a*b
          },
          Divide(a,b){
            return a/b
          }

    }
  };
  