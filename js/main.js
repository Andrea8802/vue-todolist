const { createApp } = Vue;

createApp({
    data(){
        return{
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ],
            task: "",
            error: false,
            classChecked: "taskChecked"
        }
    },
    methods:{

        addTask(){
            if (this.task === "" || this.task.length < 5){
                this.error = true

            } else{
                this.tasks.unshift({text: this.task, done: false})
                this.task = "";
            }
        },

        deleteTask(i){
            this.tasks.splice(i,1)
        }
    }
}).mount("#app");