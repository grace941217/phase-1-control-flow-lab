function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
      return 'This one is on me!'
  } else if (distance >= 400 && distance <= 2000) {
    return 'That will be twenty bucks.'
  } else if (distance >= 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."
  } else (distance > 2500)
  return "No can do."
}

scuberGreetingForFeet(199);

scuberGreetingForFeet(1500);

scuberGreetingForFeet(2001);

scuberGreetingForFeet(2501);



function ternaryCheckCity(city) {
  return (city === 'NYC'? 'Ok, sounds good.' : 'No go.');
}

console.log(ternaryCheckCity('NYC'));

console.log(ternaryCheckCity('Pittsburgh'));


function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}

(switchOnCharmFromTip('generous'));

