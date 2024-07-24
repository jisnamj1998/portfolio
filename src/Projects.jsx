
import React from 'react'

function Projects() {
    const Works=["crud","cloud","api"]
  return (
    <div>
        <ol>
            {Works.map((w,i)=><li key={i}>{w}</li>)}
        </ol>
      
    </div>
  )
}

export default Projects
