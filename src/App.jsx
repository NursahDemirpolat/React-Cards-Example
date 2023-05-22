import 'bulma/css/bulma.css'
import './App.css';
import { Course } from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import KompleWeb from './images/kompleweb.jpg'
import Frontend from './images/ccsharp.png'

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslarım
          </p>
        </div>
      </section>
      <div className="container">
        <section className='section'>
          <div className="columns">
            <div className="column">
              <Course 
                image={Angular}
                title="Angular" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
                deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
              "/>
            </div>
            <div className='column'>
              <Course 
                image={Bootstrap}
                title="Bootstrap 5" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
                deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
              "/>
            </div>
            <div className='column'>
              <Course 
                image={KompleWeb}
                title="Komple Web" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
                deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
              "/>
            </div>
            <div className='column'>
              <Course 
                image={Frontend}
                title="Frontend" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
                deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
              "/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
