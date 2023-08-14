import { useState } from 'react';
import people from './data';
import { FaBeer } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return(
    <div>
      <h2>Review Starter</h2>
      <FaBeer classnName='beer' />
    </div>
  );
};
export default App;

// - import people
// - cr8 useState index
// - cr8 destructing assignment from object people. make object people have many properties (name, job,img, text)
// - import state, Faber & navigate Faber to return
// - learn using FaBeer wtih cr8 className beer & styling it
