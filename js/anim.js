const element = document.getElementById('header-main-title')
const write = element.textContent
let content 
let i = 0

element.textContent = ''

const interv = setInterval(() => {
    if(i<=element.textContent.length){
        console.log('i start ', i)
        content = element.textContent + write.charAt(i)
        element.textContent = content
        i++
    }else clearInterval(interv)
}, 100);

