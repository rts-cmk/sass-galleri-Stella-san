import { useState } from 'react'
import './style/main.sass'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <input type="text" placeholder='Search...'/>

        <section>
          <h1>Explore</h1>
          <ul className='menu'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </section>
      </header>

      <main>

        <figcaption>
          <img src="" alt="" />
        </figcaption>

      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default App
