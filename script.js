//Como fazer uma requisição de uma api ajax
/*
setTimeout(() => {
  requisicaoApi();
}, 2000);//faz com que a requisição só seja feita após 2 segundos do documento carregar


function requisicaoApi() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); //Abrir a requisição passando: Metodo da api(GET,PUSH,DELETE e etc), Link da API, asyncrona

  request.onload = function () {
    //Quando a api carregar por completo executa o codigo
    if (this.status >= 200 && this.status < 400) {
      //verifica se não possui nenhum status de erro
      var data = JSON.parse(this.response); //response apresenta a resposta para a requisão, e anterior a ela transforma a mesma em JSON
      console.log(data);
    } else {
      console.log(erro);
    }
    request.onerror = () => {
      alert("erro"); //cria algum metodo caso haja erro
    };
  };
  request.send(); //envia a requisição
}
*/

//Como fazer requisição com o fetch
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    body: JSON.stringify({
        title:'DANKI CODE',
        body:'Meu conteudo',
        userId: 10
    }),
    headers:{
        'Content-Type': 'application/json; charset = UTF-8'
    }
})//chama a api com o metodo Post:mandando informações
  .then((response) => response.json())//transforma a resposta em json
  .then((json) => console.log(json));//printa a resposta no console

fetch('https://jsonplaceholder.typicode.com/todos/1')//chama a api com o metodo get
    .then((response) => response.json())
    .then((json)=>console.log(json))