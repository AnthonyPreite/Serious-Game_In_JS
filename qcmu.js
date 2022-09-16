const quizData = [
    {
      question: "Quel téléscope (voit) le plus loin ?",
      a: "Stevie Wonder",
      b: "Ray Charles",
      c: "Y'a t'il une réponse juste ?",
      correct: "c"
    },
    {
      question: "Quel est le meilleur vaccins contre le covid ?",
      a: "L'espèce de vaccins des autorités",
      b: "Du javel dans le sang",
      c: "La mort",
      correct: "c"
    },
    {
      question:
        "Quel est le programme qui vient de ce faire racheter par la daube ? ?",
      a: "Figma",
      b: "La daube XD",
      c: "Protopie",
      correct: "a"
    }
  ];
  
  //// D E C L A R A T I O N  •  D E S  •  C O N S T A N T E S
  const quiz = document.getElementById("quiz");
  const repEls = document.querySelectorAll(".rep");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const submitBtn = document.getElementById("submit");
  
  // Définitions variables à 0
  
  let quizActuel = 0;
  let points = 0;
  
  afficheQuiz();
  
  function afficheQuiz() {
    dslctRep();
  
    const quizActuelData = quizData[quizActuel];
  
    questionEl.innerHTML = quizActuelData.question;
    a_text.innerText = quizActuelData.a;
    b_text.innerText = quizActuelData.b;
    c_text.innerText = quizActuelData.c;
  }
  
  function dslctRep() {
    repEls.forEach((repEl) => (repEl.checked = false));
  }
  
  function slct() {
    let rep;
    repEls.forEach((repEl) => {
      if (repEl.checked) {
        rep = repEl.id;
      }
    });
    return rep;
  }
  
  submitBtn.addEventListener("click", () => {
    const reponse = slct();
    if (reponse) {
      if (reponse === quizData[quizActuel].correct) {
        points++;
      }
      quizActuel++;
  
      if (quizActuel < quizData.length) {
        afficheQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${points} / ${quizData.length} questions correctly !</h2>
  
        <button onclick="location.reload()">reload</button>`;
      }
    }
  });