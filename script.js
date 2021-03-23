// --- Quiz data ---

let data = [
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
    question: "Which ocean lies on the east coast of the United States?",
    choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
    answer: "Atlantic",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
    question: "Which is the world's highest mountain?",
    choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
    answer: "Mount Everest",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
    question: "Which of these cities is not in Europe?",
    choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
    answer: "Moscow",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
    question: "True or False: Iceland is covered in ice.",
    choice: [true, false],
    answer: "false",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "The United Kingdom is comprised of how many countries?",
    choice: [1, 2, 3, 4],
    answer: "4",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "Which of the following countries do not border France?",
    choice: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
    question: "Which U.S. state is the Grand Canyon located in?",
    choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
    answer: "Arizona",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
    question: "Which is the smallest country, measured by total land area?",
    choice: ["Maldives", "Monaco", "Vatican"],
    answer: "Vatican",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
    question: "Which is the longest river in the world?",
    choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
    answer: "Nile River",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
    question: "Which is the largest body of water?",
    choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
];

let score = 0;
let currentQuestion = 0;
let number = 0;

let quizContainer = document.getElementById("content");
let header = document.createElement("h1");
header.innerHTML = "Trivia Time!";
quizContainer.appendChild(header);

let userTotal = document.createElement("button");
userTotal.innerHTML = "How did I do?";
userTotal.id = "userTotal";
quizContainer.appendChild(userTotal);

let popUp = document.createElement("span");
popUp.classList.add("popup");
quizContainer.appendChild(popUp);

function buildQuiz() {
  // Show next question after correct answer
  const showNext = (qIndex) => {
    let questionDiv = document.querySelectorAll(".question-container");
    if (qIndex === 10) {
      return (userTotal.style.display = "block");
    } else {
      questionDiv[qIndex].style.display = "block";
    }
    setTimeout(() => {
      divContent = questionDiv[currentQuestion];
      divContent.style.opacity = 1;
      divContent.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  data.forEach((quizQuestion) => {
    // Create divs for each question
    let questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    quizContainer.appendChild(questionContainer);

    //   Display images
    let showImg = document.createElement("img");
    showImg.src = quizQuestion.url;
    questionContainer.appendChild(showImg);

    // Display questions
    let showQuestions = document.createElement("h2");
    showQuestions.innerHTML = quizQuestion.question;
    questionContainer.appendChild(showQuestions);

    // Display choices
    for (let i = 0; i < quizQuestion.choice.length; i++) {
      let showChoices = document.createElement("button");
      showChoices.innerHTML = quizQuestion.choice[i];
      questionContainer.appendChild(showChoices);

      //   Click event
      showChoices.addEventListener("click", (e) => {
        if (showChoices.innerHTML === quizQuestion.answer) {
          score++;
          currentQuestion++;
          number++;
          alert(`Correct! Your current score is ${score}`);
          showChoices.classList.add("correct");
          showChoices.style.animation = "shadow 3s 1";
          showNext(currentQuestion);
        } else {
          showChoices.classList.add("wrong");
          showChoices.disabled = true;
          alert("Try again");
          score--;
          if (score < 0) {
            score = 0;
            return;
          }
        }
      });
    }
  });
  document.getElementById("userTotal").addEventListener("click", (e) => {
    if (score == 10) {
      popUp.innerHTML = `Your total score is ${score}. <br> You're a super brain!`;
      popUp.classList.toggle("showPopup");
    } else if (score >= 7) {
      popUp.innerHTML = `Your total score is ${score}. Good job!`;
      popUp.classList.toggle("showPopup");
    } else if (score >= 4) {
      popUp.innerHTML = `Your total score is ${score}. <br> Could be better`;
      popUp.classList.toggle("showPopup");
    } else {
      popUp.innerHTML = `Your total score is ${score}. <br> You should probably read more`;
      popUp.classList.toggle("showPopup");
    }
  });
}

buildQuiz();
