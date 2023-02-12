 {
  'use strict';
  const allBooks = dataSource.books;
  console.log(allBooks);

  

  const select = {
    templateOf: {
       book: '#template-book',
       width:'ratingWidth',
       background:'ratingBgc',
    },
    containerOf: {
    container: '.books-list',
  },
   image:{
    imageWrapper: '.books-list .book__image',
    bookImage:'.book__image',
   },
   filter:{
    filterForm: '.filters',
    valueAdult: '.inputTestAdult',
    valueNon: '.inputTestNon',
  }
   
  };
  
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML), 
  }; 
   console.log(templates);


  function renderInList() {

     for ( const book of allBooks){
      // const ratingBgc = allBooks.determinRatingBgc(rating);
      // const ratingWidth = (rating)*10;

      // book.ratingBgc = ratingBgc;
      // console.log('ratingBgc', ratingBgc);
      // book.ratingWidth = ratingWidth;
     
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
const booksRef = document.querySelectorAll(select.image.imageWrapper);
console.log('bookRef', booksRef);


for(const ref of booksRef){

  ref.addEventListener('dblclick', function (event){
    event.preventDefault();
    ref.classList.toggle('favorite');

    if(!favoriteBooks.ref){
      favoriteBooks.push(ref);
    } if(favoriteBooks.ref){
      favoriteBooks.remove(ref);
    }

    if(event.target && event.target.offsetParent.classList.contains('.book__image')){
      event.target.offsetParent.classList.add('favorite');
      const booksId =  ref.dataset.id;
      favoriteBooks.push(booksId);
    }
    if(event.target  && event.target.offsetParent.classList.contains('active')){
      const booksId = ref.dataset.id;
      favoriteBooks.removeAttribute(booksId);
      event.target.offsetParent.classList.remove('favorite');
    } 
     
  });
}

    const filters = [];
    const filter = document.querySelector('.filters');

    filter.addEventListener('click',  (event)=> {

          if(event.target.checked){ 
            filters.push(event.target.value);
            console.log(event.target.value);
          }
          else {
            filters.splice(event.target.value);
            console.log(event.target.value);
          }
          filterBooks();
        });
// ======4
function  filterBooks(){
  const books = allBooks;

  for (let book of books){
     let shouldBeHidden = false;
    const filterBook = document.querySelector('.book__image[data-id="' + book.id + '"]');;

    for (let filter of filters){
      if(!book.details[filter]) {
       shouldBeHidden = true;
        break;
      }
    }
    if(shouldBeHidden){
     filterBook.classList.add('hidden');
    }
    else{
      filterBook.classList.remove('hidden');
    }
  }
  }



 
  function determinRatingBgc(rating){
    //  const ratingWidth = rating;
      const colorRating = ' ';

    // const colorRatings =[];
    // const colorRating = document.querySelectorAll('.book__rating__fill');
    // console.log(colorRating);

    if (rating < 6){
       colorRating = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
    }
     else if ( 6< rating <= 8){
       colorRating = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
    
    }else if ( 8< rating <= 9){
       colorRating = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
    }else {
       colorRating = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
    }
    
      return colorRating;
    }
     determinRatingBgc(rating);

}
initActions();


}




// ==



// function ratingBgc(){}; або умова в циклі ?


/*Рейтинг <6

background: linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%) жовтий;
Рейтинг> 6 && <= 8

background: linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%) світло-зелений;
Рейтинг> 8 && <= 9

background: linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)зелений;
Рейтинг> 9

background: linear-gradient(to bottom, #ff0084 0%,#ff0084 100%); бузковий*/


// ==============================================

//   // (function() {
//   //   const colorRatings =[];

//   //   const colorRating = document.querySelectorAll('.book__rating__fill');
//   //   console.log(colorRating);
//   //   style = colorRating[0].style;
//   //   style.background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
//   //   style = colorRating[1].style;
//   //   style.background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
//   //   style = colorRating[2].style;
//   //   style.background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
//   //   style = colorRating[3].style;
//   //   style.background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
//   //   style = colorRating[4].style;
//   //   style.background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
//   // })();

