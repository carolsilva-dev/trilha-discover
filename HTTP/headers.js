/* O que são Headers?: 
Header significa cabeçalho, e se trata de uma série de informações adicionais para o pedido ou reposta e geralmente é estruturado da forma "nome: valor", por exemplo o Content-type: application/json.
Durante esse módulo iremos apresentar os headers mais comuns.*/

/* Para facilitar nossos estudos vamos dividir os Headers por contextos. Para ver as categorias em prática, abra o DevTools na aba Network e abra o site do Google, onde você poderá clicar no primeiro campo
 e ver que aparecem 3 listas: General, Response Headers e Request Headers. A maioria dos frameworks já vem com alguns headers pré-estabelecidos, mas durante esse módulo vamos ensinar também
como se aprofundar neste conteúdo e procurar mais conhecimento.*/

/*General: Na parte de General, podemos perceber que são Headers que servem tanto para o pedido quanto para a resposta, ou seja, é um agrupamento geral. Dentro deste grupo tempos o Request URL, que é o local do site,
o Request Method, que é o método do pedido, o Status Code, o Remote Address, que é um IP que pode ser entendido como quase um endereço físico, e por fim temos o Referrer Policy, que é uma política para o referenciado, 
ou seja, são políticas para o redirecionamento.*/

/* Request: Se abrirmos a aba dos cabeçalhos de request, podemos ver vários headers, como o :authority:, que é a autoridade do pedido, o :method:, que é o método do pedido, o :path:, que é o caminho do pedido, o :schema:, 
que é o esquema que foi usado, o accept, que é o que é aceito, accept-encoding, que são os tipos de compressão usados, cookie, que são rastros deixados para a próxima conexão, entre outros.*/

/* Response: Se abrirmos a aba dos cabeçalhos de request, podemos ver vários headers, como o :authority:, que é a autoridade do pedido, o :method:, que é o método do pedido, o :path:, que é o caminho do pedido, o :schema:,
 que é o esquema que foi usado, o accept, que é o que é aceito, accept-encoding, que são os tipos de compressão usados, cookie, que são rastros deixados para a próxima conexão, entre outros.*/

/* Obtendo Ajuda: Para obter mais conhecimento nessa parte, nós recomendamos o app DevDocs, que serve para buscar informações sobre diversos frameworks, headers, etc. Tudo está em inglês, mas pode-se ir usando ferramentas 
de tradução para facilitar o entendimento*/

/* Status code mais comuns:
A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. Os status code do tipo 100 servem pra mostrar que a operação pode ser continuada sem problemas. Os status code do tipo 200 podem significar: 200 em si, 
significa que tudo está ok (GET e POST), 201, significa que o recurso foi criado (PUT), 204, significa que não há conteúdo (PUT e DELETE). 
Os status code do tipo 300 podem significar: 301, significa movido permanentemente, 308, significa redirecionamento permanente, 
302, significa uma mudança temporária assim como o 307. Os status code o tipo 400 podem significar: 400, que significa que o pedido foi mal efetuado, 401, que significa que o pedido não teve autorização,
 403, que significa que a autorização foi negada, 404, que o pedido não foi encontrado, 405, que significa que o método usado não é permitido e 429, que significa que foram efetuados muitos pedidos. Os do tipo 500: 500, que significa que ocorreu um erro desconhecido no servidor 
 e o 503, que significa que o servidor está indisponível no momento.*/