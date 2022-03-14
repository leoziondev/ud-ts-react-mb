import React from 'react';
import Destructuring, { Category } from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

const posts = [
  {
    title: "Primeiro Post",
    content: "Lorem Ipsum dollor sit amet",
    comments: 10,
    tags: ["ts", "js"],
    cat: Category.JS
  },
  {
    title: "Segundo Post",
    content: "Lorem Ipsum dollor sit amet",
    comments: 5,
    tags: ["react", "react-native"],
    cat: Category.TS
  },
]

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
      <FirstComponent />
      <SecondComponent name="Second" />
      {posts.map((post, i) => (
        <Destructuring
          key={i}
          title={post.title}
          content={post.content}
          commentsQty={post.comments}
          tags={post.tags}
          category={post.cat}
        />
      ))}
      <State />
    </div>
  );
}

export default App;
