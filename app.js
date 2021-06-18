const readlineSync = require('readline-sync');
const chalk = require('chalk');

const red = chalk.hex(`#FF0000`);
const green = chalk.hex(`#39FF14`);
const yellow = chalk.hex(`#FFFF00`);
const pink = chalk.hex(`#FF00FF`);
const skyBlue = chalk.hex(`#00FFFF`);
const orange = chalk.hex(`#FF6700`);
const purple = chalk.hex(`#9D00FF`);

const playerName = readlineSync.question(purple("What's your name : "));
console.log(`\n`);
console.log(purple(`Namaste ${playerName}, welcome to wasseypur!! \nIf you are true fan of GOW movie you will love this quiz.`));
console.log(`\n`);

console.log(`About Quiz 👇`);
console.log(`-------------`);
console.log(yellow(`• The quiz comprises of 10 questions. \n• You will be awarded 4 marks on each correct answer. \n• And 1 mark will be deducted on each wrong answer. \n• LevelOne : You have to give atleast 2 right answer out of 4 questions to get promoted to levelTwo. \n• LevelTwo : You have to give atleast 2 right answer out of 3 questions to get promoted to levelThree. \n• LevelThree : You have to give atleast 2 right answer out of 3 questions to complete this game. \n`));


const levelOneQuestionList = [
   {
    question:"1.What was the name of the character played by Rajkummar Rao? \na.Shamsher Alam \nb.Salim Alam \nc.Shamshad Alam \nd.Shahid Alam\n",
    answer:"c"
  },

  {
    question:"2.Complete the sentence - Cycle ka pipe kamjor hota hai, phat ke...? \na.Barbaad ho jayega \nb.Garden ho jayega \nc.Kharaab ho jayega \nd.Flower ho jayega\n",
    answer:"d"
  },

   {
    question:"3.Who is the director of Gangs of Wasseypur? \na.Tigmanshu Dhulia \nb.Anurag Kashyap \nc.Kabir Khan \nd.Imtiaz Ali\n",
    answer:"b"
  },

  {
    question:"4.What is the name of Sardar Khan's father? \na.Shahid Khan  \nb.Pehelwan Khan \nc.Faizal Khan \nd.Danish Khan\n",
    answer:"a"
  }
];

const levelTwoQuestionList = [
  {
    question:"5.Who was Danish Khan's wife? \na.Shazia Parveen  \nb.Shama Parveen \nc.Shaista Parveen \nd.Sultana Parveen\n",
    answer:"b"
  },

  {
    question:"6.What is the name of Ramadhir Singh's son? \na.J P Singh  \nb.A P Singh \nc.S P Singh \nd.S P Singh\n",
    answer:"a"
  },

  {
    question:"7.Choose the correct option. \na.Hamari jindagi ka ek hi maqsad hai - Paisa  \nb.Hamari jindagi ka ek hi maqsad hai - Pyaar \nc.Hamari jindagi ka ek hi maqsad hai - Jeetna \nd.Hamari jindagi ka ek hi maqsad hai - Badla\n",
    answer:"d"
  },

];

const levelThreeQuestionList = [
  {
    question:"8.___________________________ sabka badla lega tera yeh Faizal! \na.Baap ka, Dada ka, Bhai ka  \nb.Baap ka, Bhai ka, Dada ka \nc.Bhai ka, Baap ka, Dada ka \nd.Dada ka, Bhai ka, Baap ka\n",
    answer:"a"
  },

  {
    question:"9.What was the name of Sardar Khan's second wife? \na.Lakshmi  \nb.Durga \nc.Parvati \nd.Saraswati\n",
    answer:"b"
  },

  {
    question:"10.Who killed Perpendicular? \na.Shamshad Alam  \nb.Definite Khan \nc.Sultan Qureshi \nd.Ramadhir Singh\n",
    answer:"c"
  }

];

let score = 0;
let levelOneScore = 0;
let levelTwoScore = 0;
let levelThreeScore = 0;

const topScorerList = [
  {
    name : `Sourabh`,
    score : 30
  },
  {
    name : `Akanksha`,
    score : 25
  }
]


const checkAnswer = (question, rightAnswer) => {
  const playerAnswer = readlineSync.question(skyBlue(question));
  if(playerAnswer.toUpperCase() === rightAnswer.toUpperCase()){
    score+=4;
    console.log(`\n`)
    console.log(`You've entered : ${playerAnswer}`);
    console.log(green(`You're right!`));
    console.log(`SCORE : ${score}`);
    console.log(`---------------------------------------------------------------`);
  }else{
    score-=1;
    console.log(`\n`);
    console.log(`You've entered : ${playerAnswer}`);
    console.log(red(`You're wrong!`));
    console.log(`SCORE : ${score}`);
    console.log(`---------------------------------------------------------------`);
  }
}

const play = () => {
  console.log(`welcome to LEVEL ONE`);
  console.log(`\n`);
  for(let i=0; i<levelOneQuestionList.length; i++){
    checkAnswer(levelOneQuestionList[i].question, levelOneQuestionList[i].answer);
    console.log(`\n`)
  }


  levelOneScore = score;
  score = 0;

  if(levelOneScore >=6){
    console.log(green(`YAY! you've successfully completed LEVEL ONE`));
    console.log(`welcome to LEVEL TWO`);
    console.log(`\n`);
    for(let i=0; i<levelTwoQuestionList.length; i++){
      checkAnswer(levelTwoQuestionList[i].question, levelTwoQuestionList[i].answer);
      console.log(`\n`);
    }


    levelTwoScore = score;
    score = 0;

          if(levelTwoScore >=7){
            console.log(green(`YAY! you've successfully completed LEVEL TWO`));
            console.log(`welcome to LEVEL THREE`);
            console.log(`\n`)
            for(let i=0; i<levelThreeQuestionList.length; i++){
              checkAnswer(levelThreeQuestionList[i].question, levelThreeQuestionList[i].answer);
              console.log(`\n`);
            }

            levelThreeScore = score;
            score = 0;

                if(levelThreeScore >=7){
                  console.log(green(`YAY! you've successfully completed LEVEL THREE`));
                  console.log(`\n`);
                  console.log(chalk.white.bgBlue.bold(`You're final is score : ${levelOneScore+levelTwoScore+levelThreeScore}`));
                  checkBeatenScore(levelOneScore+levelTwoScore+levelThreeScore);
                }else{
                  console.log(red(`Sorry, but you are not able to complete LEVEL THREE`));
                  console.log(`Better luck next time 🤞`);
                }

          }else{
            console.log(red(`Sorry, but you are not able to complete LEVEL TWO`));
            console.log(`Better luck next time 🤞`);
          }


  }else{
    console.log(red(`Sorry, but you are not able to complete LEVEL ONE`));
    console.log(`Better luck next time 🤞`);
  }


}

const showTopPlayers = () => {
  console.log("~~TOP PLAYERS LIST~~");
  console.log(`--------------------`);
  for(let i=0; i<topScorerList.length; i++){
    console.log(purple(`Name : ${topScorerList[i].name} \nScore : ${topScorerList[i].score}`));
    console.log(`--------------------`);
  }
}

const checkBeatenScore = currentPlayerFinalScore => {
  let flag = 0;
  for(let i=0; i<topScorerList.length; i++){
    if(currentPlayerFinalScore > topScorerList[i].score);
    flag+=1;
  }
  if(flag !== 0){
    console.log(`\n`);
    console.log(orange(`Congratulations 🎉  you've beaten the highscore. \nPlease send me screenshot of your score on insta @sourabh_kheraliya.`));
    
  }else{
    console.log(`\n`);
    console.log(orange(`Sorry, but you are not able to beat the highscore. \nBetter luck next time 🤞`));
  }
}

const isPlayerReady = () => {
  const playerChoice = readlineSync.keyInYN("are you ready ?");
  if(playerChoice === false){
    console.log("");
    console.log(orange("Beta tumse na hopayega 🤦"));
  }else{
    console.log("");
    console.log(orange("sabka badla lega/legi tera yeh " +playerName+ " 🔫"));
    
      console.log(`\n`);
      play();
      console.log(`\n`);
      showTopPlayers();
  }
}


isPlayerReady();


