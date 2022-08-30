function displayNum(n){
result.value+=n

}
function allClear(){
    result.value=""
}

// eval to evaluate values

function evalExpr(){
    // expr=result.value
    // out=eval(expr)
    // result.value=out

    result.value=eval(result.value)
}

// slice method to cut string
function backSpace(){
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
}