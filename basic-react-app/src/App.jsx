import './App.css'
import Title  from './Title';
import ProductTab from './ProductTab.jsx';


function Description() {
  return <h1> I am the description! </h1>
}

function App() {
  // let name = "asmii"
  // return (
  //  <div>
  //    <Title/>
  //    <h1>Want to see magic {name.toUpperCase()} !</h1>
  //    <Title/>
  //    <button>click here</button>
  //    <Title/>
  //    <Description/>
  //    <p>2 * 2 = {2 * 2} </p>
  //  </div>
  // );

  return (
    <ProductTab />
  )
}

export default App
