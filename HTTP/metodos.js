/* Methods: Nessa aula vamos estudar os Métodos, ou verbos do HTTP que apesar de poderem ser chamados assim não necessáriamente tem formato de verbos. Eles servem para indicar o intuito da operação
  que o cliente está realizando, e cada um possui seu significado, que vamos estudar nas próximas aulas. Os métodos podem ter 2 características, seguro e idempotente. Métodos seguros não alteram o servidor, 
  são de apenas leitura, então não apresentam carga extra para o servidor e são mantidos seguros por ele, métodos considerados seguros são: GET, HEAD e OPTIONS. Os métodos Idempotentes são os métodos que não mudam de resposta,
   por isso a parte de "idem" no nome, mas podem ter status codes diferentes os métodos idempotentes são todos os métodos seguros, PUT e DELETE.*/

  /* OPTIONS:Nesta aula falaremos sobre o método OPTIONS, que é um verbo HTTP que irá nos dar informações sobre a disponibilidade de métodos da requisição. Ele é um método seguro, pois não faz alteração alguma, e é idempotente, 
  pois sempre retornará a mesma coisa para a mesma requisição, o OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable.*/

  /* GET: Nesta aula falaremos sobre o método GET, que serve para pegar um recurso, ou seja, só pode receber dados.
   Ele é um método seguro e idempotente, que não pode enviar um Body no request, mas pode receber no response, 
   ele também pode ser cacheable e é usado em alguns formulários.*/
   

   /* HEAD Nesta aula falaremos sobre o método HEAD, que é semelhante ao GET, porém é recebido somente o cabeçalho. 
   Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable.*/

   /* POST: Nesta aula falaremos sobre o método POST, que vem do inglês to post, que serve para publicar ou cadastrar um recurso.
    Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição, 
   o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.*/

   /* PUT: Nessa aula falaremos sobre o método PUT, que serve para criar ou atualizar um recurso, porém, diferentemente do POST é 
   idempotente e normalmente usado para atualizar recursos. O status code de criação do PUT é 201, e o de atualização 
   é o 204 ou 200. O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não 
   na resposta e não é usado em formulários nem é cacheable.*/

   /* PATCH: Nesta aula falaremos sobre o método PATCH, que serve para modificar parcialmente um recurso, diferentemente do PUT, 
   que é usado para modificar o recurso inteiro. Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição
    quanto resposta, não é usado em formulários e não é cacheable.*/

    /* DELETE:Nesta aula falaremos sobre o método DELETE, que serve para remover um recurso, e pode ser respondido com o código 202,
     que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi
      deletado. Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta,
       não é usado em formulários e não é cacheable.*/

