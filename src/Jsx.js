import './App.css';

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function Jsx() {
  return (
    
    <div className="jsx">
      {element}
      {element1}
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Faisal',
  lastName: 'Dzulfikar'
};

const element1 = (
  <h1>Hello, {formatName(user)}!</h1>
)
export default Jsx;
