import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return <h2>Reviews Starter</h2>;
};
export default App;

// - import people
// - cr8 useState index
// - cr8 destructing assignment from object people. make object people have many properties (name, job,img, text)