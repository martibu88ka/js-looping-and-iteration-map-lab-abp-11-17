// Code your solution in this file.
function lowerCaseDrivers(array){
return array.map(function(e){return e.toLowerCase()} )
}
function nameToAttributes(names){
  return names.map(function(name){
  let fName= name.split(" ")[0]
  let lName= name.split(" ")[1]
  return ({firstName:fName, lastName:lName})
})
}
function attributesToPhrase(homie){
  return homie.map(function(name)){
    let fName= name.split (" ")[0]
    let fHome=name.split (" ")[1]
    console.log (${fName} is from ${fHome})
  }

}
