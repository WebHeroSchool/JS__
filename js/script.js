let num;
let score;
const questions = [

	    {
	        question: "Кто основатель социальной сети Facebook?",
	        answers: {
	            a: "Билл Гейтс",
	            b: "Стив Джобс",
	            c: "Марк Цукерберг"
	        },
	        correctAnswer: "c"
	    },
	    {
	        question: "В каком году появился превый сайт?",
	        answers: {
	            a: "2003",
	            b: "1991",
	            c: "1982"
	        },
	        correctAnswer: "b"
	    },
		{	question: "Cтолица России?",
			answers: {
					a: "Санкт-Петербург",
					b: "Казань",
					c: "Москва"
			},
			correctAnswer: "c"
	},
	{
			question: "Кто основал Санкт-Петербург?",
			answers: {
					a: "Петр I",
					b: "Юрий Долгорукий",
					c: "Николай II"
			},
			correctAnswer: "a"
		}
	];

	
questions.forEach((item) => {
  if(item.correctAnswer === 'c') {
    console.log(item);
  }
});
