
const Title = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Hello World!
    </h1>
  )
}

function App() {
  return (
    <div 
      className="bg-primary h-100"
      style={{ color: 'white' }}
    >
      <Title />
    </div>
  )
}


export default App
