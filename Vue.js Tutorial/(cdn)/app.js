const app = Vue.createApp({
    template: "<h1>Hello, {{firstName}}!</h1>",
    data(){
        return {
            firstName: "John",
            lastname: "Doe",
            email: "john@email.com",
            gender: "male",
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {result} = await res.json()
            this.firstName = "Mary",
            this.lastname = "Jane",
            this.email = "mary@email.com",
            this.gender = "female",
            this.picture = 'https://randomuser.me/api/portraits/men/10.jpg'

        }
    }
})

app.mount("#app")