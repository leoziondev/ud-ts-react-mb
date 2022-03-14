import React from 'react';

function App() {
  const name: string = "Jhon Doe"
  const age: number = 32
  const isWorking: boolean = true

  const userGreeting = (name: string): string => {
    return `Bem vindo de volta ${name}!`
  }

  return (
    <div className="App">
      <h1>React com Typescript</h1>

      <h2>Nome: {name}</h2>
      <h3>{userGreeting(name)}</h3>
      <p>Idade: {age}</p>
      {isWorking && (
        <div><p>Yeeee, is working!</p></div>
      )}      
    </div>
  );
}

export default App;
