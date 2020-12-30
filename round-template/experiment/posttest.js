
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The higher is the Fineness Modulus of aggregate, then ",
      answers: {
        a: "Coarser is the aggregate",
        b: "Finer is the aggregate",
        c: "Coarser or finer the aggregate",
        d: "None of the above"
      },
      correctAnswer: "a"
    },

    {
      question: "Aggregate size affects which of the following concrete properties? ",
      answers: {
        a: "Water demand",
        b: "Cement content",
        c: "Strength",
        d: "All the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Fineness test of cement measures the",
      answers: {
        a: "Surface area of the cement particle per unit mass",
        b: "Particle size of cement",
        c: "Fineness modulus of cement",
        d: "All the above"
      },
      correctAnswer: "d"
    },
    {
      question: "The average size of cement particle is ",
      answers: {
        a: "5&micro;",
        b: "10&micro;",
        c: "20&micro;",
        d: "50&micro;"
      },
      correctAnswer: "b"
    },
    {
      question: "Sieve residue is the ",
      answers: {
        a: "Material retained on smaller sieve",
        b: "Material retained on pan",
        c: "Material retained on larger sieve",
        d: "None of these"
      },
      correctAnswer: "c"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
