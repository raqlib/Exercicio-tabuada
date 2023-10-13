function tabuada(){
var num = document.getElementById('txtn')
var tab= document.getElementById('seltab')



if (num.value.length == 0) {
    window.alert('Por favor digite um número!')
} else {
    var n = Number(num.value)
    //var c = 1
    tab.innerHTML= ''
    for (var c=1; c<=10; c++) {
        let item = document.createElement('option')
        item.text= `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }
    /*while (c<=10) {
        let item = document.createElement('option')
        item.text= `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++ 
    } */

}
}