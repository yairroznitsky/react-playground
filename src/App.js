

import Initials from './Initials/Initials'
import DayOfWeek from './DayOfWeek';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import Article from './Article/Article';
import Counter from './Counter/Counter';
import StudentPicker from './StudentPicker/StudentPicker';
import './App.css';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';


function App() {

  function ClickHandler() {
    console.log('You Clicked');
  }


  return (
    <div>
      {/* <button onClick = {ClickHandler}>Click Me</button> */}
      <Counter />
      <StudentPicker />


      <Menu>
        <a href = "/">
          <MenuItem label = "Homepage" />
        </a>
        <a href = "/about">
          <MenuItem label = "About"/>
        </a>
        <a href = "/contact">
          <MenuItem label = "Contact" link = "/contact" />
        </a>
      </Menu>
      <Initials name="Yair Roznitsky" />
      <Initials name="Shimi Tavori" />
      ---
      <DayOfWeek day={3} />
      <Article content="content" title="title" />
      <RandomColorSquare />
      
     
    </div>
  );
}

export default App;
