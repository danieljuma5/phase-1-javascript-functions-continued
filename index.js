// function declaration

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;

}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(sugar = "*") {
  return function(adj = "special") {
    return `You are ${sugar}${adj}${sugar}!`
  }

}
wrapAdjective("%")("a dedicated programmer");