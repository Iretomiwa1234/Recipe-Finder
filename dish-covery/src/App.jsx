import './App.css'

function App() {
  
  return (
    <>
      <h1>Welcome to My App</h1>
      <HomePage />
      <p>This is a simple React application.</p>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
      <style jsx>{`
        h1 {
          color: #333;
          text-align: center;
        }
        footer {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>    
    </>
  )
}

export default App
