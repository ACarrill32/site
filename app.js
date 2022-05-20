function Kyn(){
    return 'With All My Heart!!!!'
}

window.onload = function(){
    document.getElementById('btn').addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById('output').value = Kyn();
    });
};