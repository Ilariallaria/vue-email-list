// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el:'#root',
        data: {
            mailArray: [],
            mailRandom: null,
        },

        methods:{

            generateRandomMail() {

                // ciclo for per effettuare 10 chiamate
                for(let i = 0; i < 10; i++) {

                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) =>{
                        // salvo ogni response nella variabile flag
                        this.mailRandom = response.data.response;
                        // pusho ogni response nell'array vuoto
                        this.mailArray.push(this.mailRandom);
                    });
                }
        
            }
        },

        mounted(){
            // chiamo la funzione al caricamento della pagina
            this.generateRandomMail();
        }
        
    }  
);