import Chai from "./Chai"

// function userFunction(user){
//   return false
// }
function userFunction(user){
  return user.firstName+" "+user.lastName
}

const user = {
  firstName:'Suraj',
  lastName:'MOurya'
}

function App() {

  return (
    <>
      <h1>Hello {userFunction(user)}</h1>
      <Chai/>
      <Chai/>
      <Chai/>
      {/* <h1>Hello {userFunction(user)?'Suraj':'Mourya'}</h1> */}
    </>
  )
}

export default App
