import './App.css';
import { Course } from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import KompleWeb from './images/kompleweb.jpg'
import Frontend from './images/ccsharp.png'

function App() {
  return (
    <div className="App">
      <Course 
        image={Angular}
        title="Angular" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
        deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
      "/>
      <Course 
        image={Bootstrap}
        title="Bootstrap 5" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
        deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
      "/>
      <Course 
        image={KompleWeb}
        title="Komple Web" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
        deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
      "/>
      <Course 
        image={Frontend}
        title="Frontend" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates assumenda? Vero dignissimos, 
        deleniti soluta non laboriosam nesciunt adipisci et unde voluptas reprehenderit, rem ab facilis consectetur reiciendis ipsum similique.
      "/>
    </div>
  );
}

export default App;
