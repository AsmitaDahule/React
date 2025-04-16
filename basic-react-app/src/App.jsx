import './App.css'

function Title() {
  return <h1> I am the title! </h1>
}

function Description() {
  return <h1> I am the description! </h1>
}

function App() {
  return (
   <div>
     <Title/>
     <h1>Want to see magic !</h1>
     <Title/>
     <button>click here</button>
     <Title/>
     <Description/>
   </div>
  );
}

export default App
