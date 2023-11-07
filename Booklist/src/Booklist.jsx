import books from './Books.js'

function Book({img, title, author, rank}) {
  return (
    <div className='booklist-item'>
      <article className='book'>
        <img src={img} alt={title}></img>
        <div className='title-wrapper'>
          <h2>{title}</h2>
        </div>
        <h1>{author}</h1>
        <div className='rank-wrapper'>
          <div className='purple-square'>
            #{rank}
          </div>
          <div className='purple-triangle'></div>
        </div>
      </article>
    </div>
  )
}

export function Booklist() {
  return (<>
    <h1 className='title'>Best Sellers</h1>
    <section className='booklist'>
      {books.map((book, i) => {
        return <Book {...book} key={book.id} rank={i+1}/>
      })}
    </section>
  </>)
}