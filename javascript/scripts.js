//Place your javascript code related with HTML and CSS here

//nav

const button = document.querySelector('.button-container');

button.addEventListener('click',function(){
    console.log('clik')
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('all').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
    console.log(document.getElementById('all'))
});
