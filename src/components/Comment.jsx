import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/jakeliny.png"
        alt="avatar"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jakeliny Gracielly</strong>
              <time
                title="24 de dezembro às 15:13"
                dateTime='2023-12-23 15:13:13'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentario">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>Muito bom Devon, Parabens!</p>
        </div>
        <footer>
          <button><ThumbsUp></ThumbsUp> Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  )
}