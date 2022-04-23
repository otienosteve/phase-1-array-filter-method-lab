// Code your solution here
function findMatching(drivers, match){
    return drivers.filter(elem=>elem.toLowerCase()===match.toLowerCase())

}
function fuzzyMatch(drivers,match){
 return   drivers.filter(driver=>driver.split('').splice(0,match.length).join('')===match)

}
let drivers=[]
drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
function   matchName(drivers,match){
    return drivers.filter(elem=>elem.name==match)

}