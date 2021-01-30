
function textUnderline(element){
    if(element.textContent == 'Log in' || element.textContent == 'Register'){
        element.style.borderBottom = "1px solid yellow"
    }else     element.style.borderBottom = "2px solid yellow"

}
function textNotUnderline(element){
    element.style.borderBottom = "none"
}
