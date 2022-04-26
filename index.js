// code your solution here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

// function wrapAdjective(){
//   return function (blah = 'special'){
//     return function (){
//       return `You are ${blah}!`
//     }
//   }
// }

function wrapAdjective(){
  return function (design){
    return function(characteristic = 'special'){
      return `You are ${design} ${characteristic} ${design}!`;
    }
  }
}

function wrapAdjective(design = '*'){
  return function(characteristic = 'special'){
    return `You are ${design}${characteristic}${design}!`;
  }
}
