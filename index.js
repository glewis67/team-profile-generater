const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/html-template")
let team = []
function init() {

  managerInfo();
  
}
 
function managerInfo() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the manager name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager Id?",
    },
    {
      type: "input",
      name: "managerOfficeNum",
      message: "What is the manager OfficeNum?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager Email?",
    },
  ])
    .then(function (answers) {
      const managerName = answers.managerName;
      const managerId = answers.managerId;
      const managerEmail = answers.managerEmail;
      const managerOfficeNum = answers.managerOfficeNum;
      const manager= new Manager(managerName,managerId,managerEmail,managerOfficeNum)
      team.push(manager)
      nextStep()
    });
}
function nextStep(){
  inquirer
  .prompt([
    {
      type: "list",
      name: "Job",
      message: "Who do I want add next?",
      choices: ["engineer","intern","none"]
    },
  ])
  .then(function (answers) {
    switch (answers.Job) {
      
      case "intern":
        internInfo();
        break;
      case "engineer":
        engineerInfo();
        break;
        case "none":
          teamBuild()
    }
  
  })
  } 
  function internInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern Id?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern School?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern Email?",
        },
      ])
      .then(function (answers) {
        const internName = answers.internName;
        const internId = answers.internId;
        const internEmail = answers.internEmail;
        const internSchool = answers.internSchool;
        const intern= new Intern(internName,internId,internEmail,internSchool)
        team.push(intern)
        nextStep()
      });
    }
    function engineerInfo() {
      inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer Id?",
        },
        {
          type: "input",
          name: "engineerGithubUsername",
          message: "What is the engineer Github?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer Email?",
        },
      ])
        .then(function (answers) {
          const engineerName = answers.engineerName;
          const engineerId = answers.engineerId;
          const engineerEmail = answers.engineerEmail;
          const engineerGithubUsername = answers.engineerGithubUsername;
          const engineer = new Engineer(engineerName,engineerId,engineerEmail,engineerGithubUsername)
        team.push(engineer)
          nextStep()
        });
      }
init()
function teamBuild(){
  const data = template(team)
  fs.writeFileSync("./dist/index.html",data, "utf-8")


}