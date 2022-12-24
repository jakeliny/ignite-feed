import { Header } from './components/header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Jakeliny Gracielly"
            content="Lorem ipsu dolor sit amet"
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsu dolor sit amet"
          />
        </main>
      </div>
    </div>
  )
}