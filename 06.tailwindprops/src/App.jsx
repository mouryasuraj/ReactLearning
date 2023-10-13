
import './App.css';
import Card from './components/Card';

function App() {

  const obj = {
    name:'suraj'
  }
  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-xl text-slate-900 text-[40px] mb-4'>Tailwind CSS and Props</h1>
      <div className='flex gap-2 flex-wrap justify-between'>
      {/* we can pass properties to this components and you can receive this properties where this component is defined by just simple passing the parameter 'props' or by object destructuring  '{username, btnText}'. If you forget to pass the properties which are receving in the component where its defined then we can use default property*/}
        <Card username='Delba' />
        <Card username='Sunny' btnTxt="Go" myObj={obj} />
        <Card username='Sonali' btnTxt="Open Me" />
      </div>
    </>
  )
}

export default App
