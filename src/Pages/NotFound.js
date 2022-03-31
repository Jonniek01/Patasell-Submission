import React from 'react'

const NotFound = () => {
  function back(){
    return window.history.back();
  }
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        You are requesting a resource that was not found on this server. <button onClick={back}>Take me back!</button>
      </p>
    </div>
  )
}

export default NotFound