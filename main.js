


/* const pessoas = [];


function enviar(){
    var nomeValue   = document.getElementById('nome').value;
    var idadeValue  = document.getElementById('idade').value;
    var pesoValue   = document.getElementById('peso').value;
    var alturaValue = document.getElementById('altura').value;
    
    
    
    var pessoa =  {
        nome  : nomeValue,
        idade : idadeValue,
        peso  : pesoValue,
        altura: alturaValue,
        
    };
    pessoas.push (pessoa);
    
    
        
       console.log(pessoas);

        
    } */
    


    const pessoas = [];

document.getElementById('valor').addEventListener('submit', function(e){
    e.preventDefault();
    const formulario = new FormData(this);
    /* const nome = formulario.get('nome');
    const idade = formulario.get('idade');
    const peso = formulario.get('peso');
    const altura = formulario.get('altura'); */

    const novaPessoa = {
        nome:formulario.get('nome'),
        idade:formulario.get('idade'),
        peso:formulario.get('peso'),
        altura:formulario.get('altura')

    }

    pessoas.push (novaPessoa);

    console.log(pessoas);
   

});

