import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
     return checkNumber(newIndex);
    });
  };

   const prevPerson = () => {
     setIndex((currentIndex) => {
       const newIndex = currentIndex - 1;
       return checkNumber(newIndex);
     });
   };

   const randomPerson = () => {
     let randomNumber = Math.floor(Math.random() * people.length);
     if (randomNumber === index) {
       randomNumber = index + 1;
     }
     setIndex(checkNumber(randomNumber));
   };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaChevronRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;

// - import people
// - cr8 useState index
// - cr8 destructing assignment from object people. make object people have many properties (name, job,img, text)
// - import state, Faber & navigate Faber to return
// - learn using FaBeer wtih cr8 className beer & styling it
// - change import react icon to FaChevronLeft, FaChevronRight, FaQuoteRight
// - cr8 new base structure on return
// - Accessing property image & name at img structure
// - cr8 span with accessing FaChevronRight react icon
// - Cr8 h4 & p with acccessing name, job & text properties 
// - Add className for properties name, job & text
// - cr8 base nextPerson & prevPerson for placeholder function
// - cr8 button onclick for nextPerson & prevPerson
// - Accessing react icon with FaChevronLeft for button prevPerson & FaChevronRight for button nextPerson
// - cr8 base call function setIndex & callback function with parameter index
// - Add argument sign newIndex
// - setup return for nextPerson
// - Add call function setIndex, argument, return for prevPerson
// - Fix bug logic on nextPerson
// - Fix bug logic on prevPerson
// - Cr8 funct checkNumber for nextPerson & prevPerson
// - pass in checkNumber on return
// - S7-187:Cr8 button randomPerson structure
// - S7-187:Cr8 variable randomNumber equal math.random
// - S7-187:Cr8 conditional state for randomNumber
// - S7-187:setup setIndex with randomNumber include checkNumber