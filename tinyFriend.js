  function tinyFriend(arr){
    var shortest = arr[0];
    for( var i=0; i < arr.length ; i++) {
        var element = arr[i];
        if( element.length < shortest.length){
           shortest= element;
        }
    }
  return shortest;
  }
var shortesetName =tinyFriend(["mehedi", "hasan","omi", "chandrika"]);
console.log(shortesetName);