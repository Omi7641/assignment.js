function woodCalculator(chair,table,bed){
    var chaircount = chair * 1 ;
    var tablecount = table *3 ;
    var bedcount = bed *5 ;
    var totalwood = chaircount + tablecount + bedcount ;
    return totalwood ;

}
var output = woodCalculator (2,1,1);
console.log(output);