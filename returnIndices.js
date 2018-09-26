function returnIndices(string){
  var updateIndex = [];
  var currentPositon = 0;
  var objectLetter = {};
  var fullString = string.replace(/ /g,'');

  for (var key of fullString){
    if (objectLetter[key]){
      updateIndex = objectLetter[key];
      updateIndex.push(currentPositon);
      objectLetter[key] = updateIndex;
    }else{
      var letterIndex = [];
      letterIndex.push(currentPositon);
      objectLetter[key] = letterIndex;
      }
      currentPositon ++;
 }
return objectLetter

}

console.log(returnIndices("lighthouse in the house"));