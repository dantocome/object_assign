
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/",

};

// Q1
languages.push("Go");
// console.log(programming);

// Q2
    delete programming.difficulty;
//  console.log(programming);

// Q3
    delete programming.jokes;
    // console.log(programming);

    // Q4
    programming.isFun = "true";
    console.log(programming);