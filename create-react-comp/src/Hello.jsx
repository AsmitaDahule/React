function Hello() {
  let name = "yalaan";
  let number = 50;
  let job = () => {
    return "software developer";
  }
  return <h3>
    message no: {number} :
    Hello this is {name}! a {job()}
  </h3>
}

export default Hello;