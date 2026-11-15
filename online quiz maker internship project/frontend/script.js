// DARK MODE

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");
}

// TIMER

let timeLeft = 60;

function startTimer(){

    const timer = setInterval(()=>{

        timeLeft--;

        const timerElement =
            document.getElementById("timer");

        if(timerElement){

            timerElement.innerText =
                `Time Left: ${timeLeft}s`;
        }

        if(timeLeft <= 0){

            clearInterval(timer);

            if(typeof submitQuiz === "function"){

                submitQuiz();
            }
        }

    },1000);
}

// PROGRESS BAR

function updateProgress(current,total){

    const percent = (current/total)*100;

    const progressBar =
        document.getElementById("progressBar");

    if(progressBar){

        progressBar.style.width =
            percent + "%";
    }
}