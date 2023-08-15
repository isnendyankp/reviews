import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src="" alt="" />
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
