  function tinyFriend(arr){
    var shortest = arr[0];
    for( var i=0; i < arr.length ; i++) {
        var element = arr[i];
        if( element > shortest){
            min = element;
        }
    }
  return shortest;
  }
var shortesetName =tinyFriend(["mehedi", "hasanSFDGfsD", "omi", "chandrika"]);
console.log(shortesetName);