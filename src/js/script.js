{
  'use strict';
  const allBooks = dataSource.books;
  console.log(allBooks);

  const select = {
    templateOf: {
       book: '#template-book',
    },
    containerOf: {
    container: '.books-list',
  },
   image:{
    imageWrapper: '.book-list .book__image',
    bookImage:'.book__image',
   },
  };
  
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),   
  }; 
   console.log(templates);


  function renderInList() {

     for ( const book of allBooks){
          
    /* generate HTML based on template (генерувати HTML на основі шаблона)*/ 
    const generatedHTML = templates.books(book);
    // console.log(generatedHTML);

    /* create element using utils.createElementFromHTML(створити  елемент за допомогою utils.createElementFromHTML)*/
    const generatedDOMElement = utils.createDOMFromHTML(generatedHTML);

    /* find menu container (знайти контейнер )*/
     const bookContainer = document.querySelector(select.containerOf.container);
    console.log(bookContainer);

    /* add element to menu (додати елемент до контейнеру)*/
     bookContainer.appendChild(generatedDOMElement);
    }
  };
  renderInList();
  
// ===2===
  const favoriteBooks = [];
  console.log(favoriteBooks);

  function initActions(){  

  const links =  document.querySelectorAll(select.image.imageWrapper);
  console.log(links);
  const bookImage = document.querySelector(select.image.bookImage);
  console.log(bookImage);

  // for(let activeLink of activeLinks){
  //   activeLink.classList.add('active');
  // }

  for(const link of links){
    
    link.addEventListener('dbclick', function(event){
    event.preventDefault();  
       if(link){
        link.classList.add('favorite'); 
      } 
     });           
  }

    const booksId =  bookImage.getAttribute('data-id');
    console.log(booksId);
    favoriteBooks.push(booksId);
    console.log(booksId); 
  }
  
  initActions();  

}



  
