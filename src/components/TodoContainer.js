import React from 'react'
import styles from './TodoContainer.module.css';

function TodoContainer() {
  return (
    <div className={styles.introContainer}>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <video src='/videos/Hologram.mp4' autoPlay loop muted />
      <h1>ORGANIZE YOUR TASKS</h1>
      <p>Don't keep putting them off!</p>
    </div>
  )
}

export default TodoContainer;