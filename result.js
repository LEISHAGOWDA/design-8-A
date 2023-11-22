﻿window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname');
    const email = params.get('email');
    const comments = params.get('comments'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME');
    const email = localStorage.getItem('EMAIL'); 
    const comments = localStorage.getItem('COMMENTS');  */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const email = sessionStorage.getItem('EMAIL');
    const comments = sessionStorage.getItem('COMMENTS');

    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-comments').innerHTML = comments;


})