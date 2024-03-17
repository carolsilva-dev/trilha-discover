/* O que é DOM ?

 * Document Object Model;
 * Uma inerface de programação para HTML;
 * Por meio dele temos métodos para acessar a arvore de elementos ;
 * O DOM fornece uma cópia HTML;
 * Podemos manipular eventos pelo DOM para afetar o HTML;*/  




// getElementById()

const element = document.getElementById('blog-title')
console.log(element)


// getElementByClassName()

const elemento = document.getElementsByClassName('name')
console.log(elemento)

//getElementsByTagName()

const element2 = document.getElementsByTagName('h3')
console.log(element2)


//querySelector()

const element3 = document.querySelector('meta')
console.log(element3)

//querySelectorAll()

const element4 = document.querySelectorAll('title')
console.log(element4)

// Qual usar ?

// getElementById()....(element)
// getElementByClassName()....(HTMLcollection)
// getElementsByTagName()....(HTMLcollection)
//querySelector()....(element)
//querySelectorAll()....(Nodelist) (podeusarForIt)




// Manipulando conteudo:

//  * textContend (troca do texto inerno do elemento HTML)

const element5 = document.querySelector('h1')
element5.textContent += " Ola Devs! "



// * InnerHTML (troca o conteudo interno HTML )

const element6 = document.querySelector('h1')
element6.innerHTML = "Ola devs! <small>!!!</small>"



// * Value (alterando valor)

const element7 = document.querySelector('input')

console.log(element7.value)
element7.value = "Outro valor"



/* Manipulando atributos (ADC PEGAR E REMOVER atributos)

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID)
console.log(headerID.getAttribute('class'))
header.removeAttribute('class')*/




/* Manipulando estilos e classes:

  Alterando estilos com style:

  const element8 = document.querySelector('body') 

 element8.style.backgroundColor = "#f9f3D2"
 console.log(element8.style.backgroundColor)

 // Class List:

  const element8 = document.querySelector('body') 
  element.classList.add('active', 'green)
  console.log(element.classList)

  //element.clasList.remove('active)*/





  /* Navegando entre os elementos:

  // parentElement e parentNode: (elementos pais)

 //  ChildNodes Children: (elementos filhos)

   * FirstChild firstElementChild
   * LastChil lastElementChild 
   
   
  // nextSibling  nextElementSibling  (elementos irmãos)

  *PreviosSibling previosElementSibling*/





  /* Criando e adicionando elementos na página:


  // CreatElement
  // Append prepend
  // InsertBefore




   
   





