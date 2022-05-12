const number = Math.floor((Math.random() * 15) + 1);
document.getElementById("submit").onclick = function () {
    var guesss = document.getElementById("input").value;
    var li = document.createElement("li");

    if (guesss > number) {
        li.textContent = "Your guess is to high"
        document.getElementById("results").prepend(li);

    }
    else if (guesss < number) {
        li.textContent = "Your guess is to low"
        document.getElementById("results").prepend(li);

    } 
    else{
        
        li.textContent = "congrats!! you won"
        document.getElementById("results").prepend(li);

    }

   if(isNaN(guesss)) {
        alert("please enter a number");
    }
};