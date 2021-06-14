//Referencias do DOM
const selCidade = document.getElementById('selCidade');
const btnConsultar = document.getElementById('btnConsultar');

const imgTempo = document.getElementById('imgTempo');
const pTemp =document.getElementById('pTemp');



//


import apiTempo from '../services/api.js';

function consultaTempo(){
    const cidade = selCidade.value;

    apiTempo.get(cidade).then(res=>{
        console.log(res.data.results);
        const { temp, condition_slug } = res.data.results;
        console.log(temp);
        console.log(condition_slug);
        displayIcon[condition_slug]();
        pTemp.innerHTML= `Temperatura: ${temp} &deg;C`
    });
}
const displayIcon ={
    storm:()=>{

     },
    snow:()=>{ 

    },
    hail:()=>{

     },

    rain:()=>{ },

    fog:()=>{ },

    clear_day:()=>{ },

    clear_night:()=>{ },

    cloud:()=>{ },

    cloudly_day:()=>{
        imgTempo.setAttribute('src' ,'../assets/tNublado.png');
     },
    cloudly_night:()=>{ },

    none_day:()=>{ },

    none_night:()=>{ },
}

btnConsultar.onclick =()=>{
    consultaTempo();
};