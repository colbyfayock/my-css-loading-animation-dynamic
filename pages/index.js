import { useState, useEffect } from 'react';

export default function Home() {
  const [loadingState, updateLoadingState] = useState(true);
  const [contentState, updateContentState] = useState({})
  const content = {
    header: `So, how 'bout them Knicks?`,
    intro: `What are their names? I'm Santa Claus! This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Good news, everyone! I've taught the toaster to feel love!`,
    list: [
      `Yes! In your face, Gandhi!`,
      `So I really am important? How I feel when I'm drunk is correct?`,
      `Who are those horrible orange men?`
    ]
  }
  useEffect(() => {
    setTimeout(() => {
      updateContentState(content);
      updateLoadingState(false)
    }, 2000);
  }, [])
  return (
    <div className="container">
      <main>
        <h1>{ contentState.header }</h1>
        <p>{ contentState.intro }</p>
        <ul>
          { Array.isArray(contentState.list) && contentState.list.map((item, i) => {
            return (
              <li>{ item }</li>
            )
          })}
        </ul>
      </main>

      <style jsx>{`
        .loading {
          color: transparent;
          background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
          background-size: 400%;
          animation: loading 1.2s ease-in-out infinite;
        }

        @keyframes loading {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          max-width: 50em;
          padding: 0 1em;
          margin: 0 auto;
        }

        li {
          margin-bottom: .5em;
        }
      `}</style>
    </div>
  )
}
