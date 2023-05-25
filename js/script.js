//alert('Ola JS!');
function calcularIMC(){
    //console.log('Função carregada!')
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var result = document.getElementById('result');
    var IMC;

    //console.log(altura);
    //console.log(peso);

    if(altura != ''&& peso !=''){
        result.style.visibility='visible';
        /*
        Formula IMC: peso/altura²
        */
        IMC=peso/(altura*altura);
        //console.log(IMC);
        result.innerHTML = '<h3>Seu IMC é: '+IMC.toFixed(2)+'</h3>';
        if(IMC<18.5||IMC>=30){
            result.style.background='#a30a0a';
        }
        else if(IMC>=25 && IMC<=29.9){
            result.style.background='#c24a00';
        }else{
            result.style.background='#005F09'
        }
    }else{
        alert('Preencha todos os campos!')
    }
}
//selecionando o input
var inputPeso = document.getElementById('peso');
//associando a ação de soltar a tecla ao input
inputPeso.addEventListener('keyup', function(e){
    //e-->resposta do evento
    if(e.key == 'Enter'){
        calcularIMC();
    }
})