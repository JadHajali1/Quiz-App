if(!localStorage.getItem("quizzes")){   
    const quizzes = [
      {
        num: 1,
        question: "Which of the following makes a side interactive?",
        answer: "C. Website style and layout",
        options:[
          "A. Website behavior",
          "B. Website structure",
          "C. Website style and layout"
        ]
      },

      {
        num: 2,
        question: "Which is a server-side language?",
        answer: "A. PHP",
        options:[
          "A. PHP",
          "B. HTML",
          "C. SQL"
        ]
      },

      {
        num: 3,
        question: "What does HTTP stand for?",
        answer: "B. HyperText Transfer Protocol",
        options:[
          "A. Hyperlink Text Protocol",
          "B. HyperText Transfer Protocol",
          "C. High Text Transfer Process"
        ]
      }    
    ];
}