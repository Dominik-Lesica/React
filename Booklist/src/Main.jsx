import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/style.scss'

function Book() {
 return (
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
 )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg' alt='Friends, Lovers, and the Big Terrible Thing'/>
const Title = () => <h2>Friends, Lovers, and the Big Terrible Thing</h2>
const Author = () => <h4>Matthew Perry</h4>

function Booklist() {
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);