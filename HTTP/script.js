// HTTP

/* Hypertext Transfer Protocol, em português Protocolo de Transferência de Hipertexto que 
é o conjunto de regras para a comunicação por meio de Hipertexto,um tipo de texto que pode carregar diferentes dados.
 O protocolo HTTP é usado todos os dias para acessar sites pela internet, pois é ele que permite a troca de dados na web, 
 entre esses dados estão códigos HTML e CSS, Scripts. imagens e vídeos, entre muitos outros, 
 e para cada um desses recursos executa uma chamada.*/

 /*No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request e Response,
  mandando mensagens nos dois casos. No caso das mensagens de pedidos, você precisa de um verbo HTTP, que chamamos de método, 
  que vai definiir o tipo de pedido que está sendo feito, por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, 
  como um URL para algum local da internet, ou o método POST, que serve para criar um recurso. Depois do pedido, 
  a resposta traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos, estão 200,
  onde tudo deu certo e sua página foi enviada, 404, onde o servidor não conseguiu encontrar o pedido, 301, 
  que é um redirecionamento para outro local, entre outros além do Status Code, o servidor pode mandar um header e um body.
   Existem coisas que podem estar tanto na Request quanto na Response, que são o header e o body, os Headers são campos informativos,
    e o body contém conteúdo, podendo ser em forma de HTML ou JSON.*/


/* HTTP foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa. Ele foi baseado na estrutura de cliente/servidor, 
ou seja, sempre vão ter uma requisição e uma resposta acontecendo, como um exemplo, voce pode pensar na forma de comprar um lanche, 
você faz um pedido, especificando a comida que você quer, e o estabelecimento te "responde" com a comida. O HTTP foi criado para 
também ser stateless, traduzindo, não guardar estado, ou seja, ele não vai guardar nenhuma informação, e não existe nenhuma relação 
entre as conexões. Outra característica do protocolo é ser extensível, podendo fazer diversas trocas de informação entre o cliente e 
o servidor, conforme a necessidade.*/

/* O Cliente é a entidade que dá inicio à toda comunicação com um pedido, fora em algumas poucas exceções. Esses pedidos são feitos
 através de ações, que usam os métodos do HTTP, como GET, POST, PUT e DELETE*/

/*Servidor, que é uma máquina em algum lugar do mundo preparada para lidar com as requisições do cliente e mandar uma reposta.
 A resposta sempre tem um Status Code, e pode ter headers e body.*/

/*Proxies:são coisas que ficam entre o Servidor e o Cliente, como por exemplo o roteador que está servindo internet para você agora.
 O Proxy pode ter diversas funções, como cache, para armazenar algumas informações e acelerar o uso. filtro, para impedir
  o acesso de alguns sites para um antivirus ou um controle parental, entre outros.*/


  /* RESOURCE:Para entendermos como como chegar a um endereço, precisamos entender primeiramente como montar um endereço, para isso usamos o URI, 
  sigla para Uniform Resource Identifier, Identificador de Recurso Uniforme em português, que serve para identificar um recurso por seu nome ou sua localização.*/

  /* Recurso: Para entendermos o URI precisamos entender o que é o recurso, que é o alvo do pedido feito cliente. Um recurso pode ser qualquer coisa identificável, 
  como uma entidade digital, como um email, uma entidade abstrata, como uma sessão e até uma entidade física, como um produto.*/

  /*  URL:Um recurso pode ser encontrado pelo locator, localizador em português, ou pelo nome, para encontrar com o locator, utilizamos o URL, sigla para Uniform Resource Locator, ou seja,
   toda URL é um URI, mas o contrário não é verdadeiro. Toda URL obrigatoriamente precisa de 2 componentes, um protocolo, 
   que é por exemplo o "HTTPS" em uma URL, e um domínio, que é por exemplo a parte "rocketseat.com.br" no site da Rocketseat.
    A URL pode ter alguns outros componentes opcionais, como o subdomínio, como a parte "www." antes de alguns URLs, como o Path,
  que serve para acessar partes específicas de um site, como os Parâmetros, como a Porta, que é um componente que é adicionado 
   depois do domínio por um carácter :, e também a Âncora, que serve para apontar algum lugar específico de algum documento.*/

 /* URN:Para encontrar um recurso pelo nome, ao invés da URL, utilizamos a URN, Uniform Resource Name. Um exemplo de URN é urn:isbn:0451450523, porém a URL é bem mais usada na web.*/
  
 /* Request: A mensagem do pedido consiste no método, por exemplo GET, a versão do protocolo e a URI, dependendo do método usado, pode se levar headers e body.*/

 