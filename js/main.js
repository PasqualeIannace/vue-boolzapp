const { createApp } = Vue

var DateTime = luxon.DateTime;

createApp({
	data() {
		return {
			contacts: [
				{
					name: 'Michele',
					avatar: './img/avatar_1.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ricordati di stendere i panni',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							message: 'Tutto fatto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Fabio',
					avatar: './img/avatar_2.jpg',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							message: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							message: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							message: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
				{
					name: 'Samuele',
					avatar: './img/avatar_3.jpg',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							message: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							message: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							message: 'Ah scusa!',
							status: 'received'
						}
					],
				},
				{
					name: 'Alessandro B.',
					avatar: './img/avatar_4.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
				{
					name: 'Alessandro L.',
					avatar: './img/avatar_5.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ricordati di chiamare la nonna',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Va bene, stasera la sento',
							status: 'received'
						}
					],
				},
				{
					name: 'Claudia',
					avatar: './img/avatar_6.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ciao Claudia, hai novità?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Non ancora',
							status: 'received'
						},
						{
							date: '10/01/2020 15:51:00',
							message: 'Nessuna nuova, buona nuova',
							status: 'sent'
						}
					],
				},
				{
					name: 'Federico',
					avatar: './img/avatar_7.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Fai gli auguri a Martina che è il suo compleanno!',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Grazie per avermelo ricordato, le scrivo subito!',
							status: 'received'
						}
					],
				},
				{
					name: 'Davide',
					avatar: './img/avatar_8.jpg',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Ciao, andiamo a mangiare la pizza stasera?',
							status: 'received'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:51:00',
							message: 'OK!!',
							status: 'received'
						}
					],
				}
			],

			indexChat : 0,

			lastMessages : [],

			myInput: '',

			search: '',

			// LUXON TEST
			//dataTest: '102020' // '10/01/2020', //  16:15:22
		}
	},
	methods: {
		getLastMessage() {
			for(i = 0; i < this.contacts.length; i++) {
				// pesco i messaggi
				let messaggi = this.contacts[i].messages;
				// pesco l'ultimo messaggio
				for(x = 0; x < messaggi.length; x++) {
					if(x == messaggi.length - 1) {
						// pusho l'ultimo messaggio
						this.lastMessages.push(messaggi[x]);
					}
				}
			}
		},

		selezionaChat(indice) {
			// aggiorno l'indice
			this.indexChat = indice;
		},

		send() {
			// genero il messaggio come oggetto
			let myText = { date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE), message: this.myInput, status: 'sent'};
			// pusho il messaggio nell'array
			this.contacts[this.indexChat].messages.push(myText);
			// pulisco il campo input
			this.myInput = "";

			// richiamo la risposta con 1 secondo di delay
			setTimeout(this.getAnswer, 1000);
		},

		getAnswer() {
			let answer = { date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE), message: "Ok!", status: 'received'};
			this.contacts[this.indexChat].messages.push(answer);
		}
	},
	mounted() {
		this.getLastMessage();

				// TEST LIBRERIA LUXON, COME SI CONVERTE UN DATO ESISTENTE?
					// console.log(DateTime.fromFormatExplain(this.lastMessages[0].date, "f").toLocaleString(DateTime.TIME_SIMPLE));
					// let provaData = JSON.stringify(this.dataTest);
					// console.log("Data test 1", this.dataTest);
					
					// this.dataTest = JSON.stringify(this.dataTest);
					// console.log("Data test 2", this.dataTest);
					// console.log(DateTime.fromISO(this.dataTest).toFormat('dd yyyy'));
					
					// console.log(this.lastMessages[0].date);
				////////////////////////////////////////////////////////////
	},

	// MILESTONE 4 search bar
	computed: {
		filteredList() {
		  return this.contacts.filter(searchBar => {
			return searchBar.name.toLowerCase().includes(this.search.toLowerCase())
		  })
		}
	}

}).mount('#app')