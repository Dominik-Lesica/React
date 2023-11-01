import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/style.scss'

function Book() {
 return (
  <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
 )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg' alt='Friends, Lovers, and the Big Terrible Thing'/>
const Title = () => <h2>Friends, Lovers, and the Big Terrible Thing</h2>
const Author = () => <h1>Matthew Perry</h1>

function Booklist() {
  return (<>
    <h1 className='title'>Best Sellers</h1>
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
    </section>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);