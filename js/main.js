const { createApp } = Vue;

createApp({
    data(){
        return{
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ],

            task: ""
        }
    },
    methods:{

        addTask(){

            this.tasks.push({text: this.task, done: false})
            console.log(this.tasks);
        }
    }
}).mount("#app")