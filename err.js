let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = ()=>{
    profile.classList.toggle('active');
    //searchForm.classList.remove('active');
}

//let searchForm = document.querySelector('.header .flex .search-form');

//document.querySelector('#search-btn').onclick = ()=>{
    //searchForm.classList.toggle('active');
    //profile.classList.remove('active');
//}

window.onscroll = ()=>{
    profile.classList.remove('active');
    //searchForm.classList.remove('active');
}