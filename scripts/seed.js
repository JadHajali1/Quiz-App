if(!localStorage.getItem("quizzes")){   
    const quizzes = [
        {
          id: "quiz1",
          title: "JavaScript Basics",
          questions: [
            {
              question: "What is a closure?",
              options: ["Scope", "Function inside function", "Loop", "None"],
              answer: "Function inside function"
            },
            {
              question: "Which symbol is used for comments in JavaScript?",
              options: ["//", "##", "<!--", "/* */"],
              answer: "//"
            },
            {
              question: "What is the keyword to declare a variable?",
              options: ["var", "int", "define", "dim"],
              answer: "var"
            }
          ]
        },
        {
          id: "quiz2",
          title: "HTML & CSS",
          questions: [
            {
              question: "What does HTML stand for?",
              options: ["HyperText Markup Language", "Cascading Style Sheets", "Markdown", "None"],
              answer: "HyperText Markup Language"
            },
            {
              question: "Which tag is used for inserting an image?",
              options: ["<img>", "<image>", "<pic>", "<src>"],
              answer: "<img>"
            },
            {
              question: "How do you change text color in CSS?",
              options: ["color", "font-color", "text-color", "style"],
              answer: "color"
            }
          ]
        }
    ];
    localStorage.setItem("quizzes",JSON.stringify(quizzes));
    console.log("quis data success")
}else{
    console.log("alreadey exist");
}