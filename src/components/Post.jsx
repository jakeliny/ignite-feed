import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author }) {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar src="https://github.com/jakeliny.png" />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="24 de dezembro de 2022 às 14:23"
          dateTime='2022-12-24 14:23:23'
        >
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto </a>{' '}
          <a href="#">#nlw </a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />

        <footer><button type="submit">Publicar</button></footer>

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}