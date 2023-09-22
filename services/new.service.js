
module.exports={
    name: "new",
    actions: {
        def:{
            async handler(ctx){
                const result = await this.add(9,20);
                return result;

            }

        }
       
       },methods:{
        add(a,b){
            return a+b
        }
       }
}


