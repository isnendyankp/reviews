import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
    });
  };

   const prevPerson = () => {

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