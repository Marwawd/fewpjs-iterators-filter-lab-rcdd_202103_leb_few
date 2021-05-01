// Code your solution here
function findMatching (array, name) {
  return list.filter(function (n) {
    return n.toLowerCase() === name.toLowerCase();
  });
}
 //(item.charAt(0).toUpperCase()===string.charAt(0).toUpperCase())));

//array.filter(item=>(item.charAt(0).toUpperCase()===string.charAt(0).toUpperCase()));

  }

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

findMatching(drivers, 'Bobby')



function fuzzyMatch(array,str){
  return array.filter(n => {return n.startsWith(str, 0) })

}


fuzzyMatch(drivers, 'Bo')


const driverss = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function matchName(array,str){
  return array.filter(n => {return n.name===str })
}


matchName(driverss, 'Bobby')
