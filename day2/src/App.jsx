import './App.css';
// import Greeting from './Components/Greeting';
import Button from './Components/Button';
import Avatar from './Components/Avatar';

const users=[
  {
    id:1,
    avatar_url:"https://avatars.githubusercontent.com/u/112757431?v=4",
    name:"Faisal Pinitod",
    rounded:false
  },
  {
    id:2,
    avatar_url:"https://avatars.githubusercontent.com/u/112754750?v=4",
    name:"Asif Patel",
    rounded:true
  }
]

const userAvatars=users.map((user)=>(
   <Avatar 
   key={user.id} 
   src={user.avatar_url} 
   name={user.name} 
   rounded={user.rounded} />))

function App() {

  function handleButtonClick(){
    console.log("button is clicked")
  }


  return (
    <div className="App">
      {/* <Greeting/> */}
   
     {userAvatars}
      <Button 
      text="i'm button"
      age={21}
      someArr={[1,2,3]}
      someObj={{name:"batman"}}
      handleButtonClick={handleButtonClick} 
      />
      {/* {1+2===4 ? "true":"nah"} */}
    </div>
  );
}

export default App;
