function chooseCountry() {
    correctCountry = countries[Math.floor(Math.random()*countries.length)];
    console.log(correctCountry)
    totalChoices.push(correctCountry);
}

function choices() {
    totalChoices = [];
<<<<<<< HEAD
    correctCountry = countries[Math.floor(Math.random()*countries.length)]
=======
<<<<<<< HEAD
    correctCountry = countries[Math.floor(Math.random()*countries.length)]
=======
    correctCountry = countries[Math.floor(Math.random()*countries.length)];
>>>>>>> 072ef178b93e167aa6843998af623605b9e83211
>>>>>>> 2a9ad86fed2b51d5e101c96533505e878bb14c38
    document.getElementById("picture").src = "MAPS/" + correctCountry + ".png";
    totalChoices.push(correctCountry);
    for(let i = 0; i < 4; i++) {
        var choiceIsNotValid = true;
        while(choiceIsNotValid) {
            var alternate = countries[Math.floor(Math.random() * countries.length)];
            //check that this country is not in the total choices array
            if(!totalChoices.some(country => country == alternate)) {
                totalChoices.push(alternate);
                choiceIsNotValid = false;
            }
        }
    }
     //shuffles the totalChoices will all of the options
     for (let i = totalChoices.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [totalChoices[i], totalChoices[j]] = [totalChoices[j], totalChoices[i]];
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 072ef178b93e167aa6843998af623605b9e83211
>>>>>>> 2a9ad86fed2b51d5e101c96533505e878bb14c38
    //puts options in html
    console.log(totalChoices)	
    document.getElementById("a").innerText= totalChoices[0];
    document.getElementById("b").innerText= totalChoices[1];
    document.getElementById("c").innerText= totalChoices[2];
    document.getElementById("d").innerText= totalChoices[3];
    document.getElementById("e").innerText= totalChoices[4];
}
var correctCountry = null
var totalChoices = [];
var countries = [
<<<<<<< HEAD
    "Afganistan",
=======
<<<<<<< HEAD
    "Afganistan",
=======
    "Afghanistan",
>>>>>>> 072ef178b93e167aa6843998af623605b9e83211
>>>>>>> 2a9ad86fed2b51d5e101c96533505e878bb14c38
    "Australia", 
    "Brasil", 
    "Belgium",
    "Canada",
    "China",
    "Egypt", 
    "France",
    "Germany",  
    "Greenland",
    "Iceland",
    "India",
    "Italy",
    "Japan", 
    "Luxembourg",
    "Mexico",
    "Russia",
    "Spain",  
    "United Kingdom", 
    "United States", 
<<<<<<< HEAD
]

=======
<<<<<<< HEAD
]

=======
]
>>>>>>> 072ef178b93e167aa6843998af623605b9e83211
>>>>>>> 2a9ad86fed2b51d5e101c96533505e878bb14c38
