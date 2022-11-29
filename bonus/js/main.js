const { createApp } = Vue;

createApp({
    data(){
        return{
            pageLoaded: false,
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ],
            task: "",
            error: false,
            classChecked: "taskChecked",
            imgLogo : "img/logo.png",
            taskDone : "taskDone"
        }
    },

    methods:{

        // Funzione per aggiungere task
        addTask(){
            if (this.task === "" || this.task.length < 5){
                this.error = true;

            } else{
                this.tasks.unshift({text: this.task, done: false})
                this.task = "";
                this.error = false;
            }
        },

        // Funzione per modificare se una task è stata compiuta o meno dall'utente
        doneTask(i){
            if (this.tasks[i].done){
                this.tasks[i].done = false;

            } else{
                this.tasks[i].done = true;

            }
        },

        // Funzione per eliminare task
        deleteTask(i){
            this.tasks.splice(i, 1)
        }
    },

    mounted(){
        this.pageLoaded = true;
    }
    
}).mount("#app");