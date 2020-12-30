
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
      question: "Effective size of the aggregate is the",
      answers: {
        a: "Maximum particle size of the smallest 30% of the aggregate",
        b: "Maximum particle size of the smallest 10% of the aggregate",
        c: "Maximum particle size of the smallest 60% of the aggregate",
        d: "All the above"
      },
      correctAnswer: "b"
    },

    {
      question: "Coefficient of curvature is",
      answers: {
        a: "C<sub>c</sub>=D<sub>30</sub><sup>2</sup> / (D<sub>60</sub> * D<sub>10</sub>)",
        b: "C<sub>c</sub>=D<sub>30</sub> / (D<sub>60</sub> * D<sub>10</sub>)",
        c: "C<sub>c</sub>=D<sub>60</sub><sup>2</sup>/(D<sub>30</sub> * D<sub>10</sub>)",
        d: "C<sub>c</sub>=D<sub>10</sub><sup>2</sup>/(D<sub>60</sub> * D<sub>30</sub>)"
      },
      correctAnswer: "a"
    },

    {
      question: "Sieving should be done by rotating the sieve and not by translation.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
        question: "Open gradation refers an aggregate sample with",
        answers: {
          a: "Very little coarse aggregate particles",
          b: "Very little fine aggregate particles",
          c: "All size particles",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
    {
        question: "The fineness modulus is calculated by adding the percentages by mass retained on each of a specified series of sieves and dividing the sum by 100.",
    answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
