import { PlusCircle } from 'phosphor-react';
import React from 'react';
import styles from './App.module.css';
import logoPath from './assets/todo-list-logo.svg';

function App(): React.ReactElement {
  return (
    <>
      <header className={styles.header}>
        <img src={logoPath} alt="ToDo List logo" title="ToDo List logo" />
      </header>

      <main className={styles.wrapper}>
        <form className={styles.form}>
          <input name="task" placeholder="Adicione uma nova tarefa" required />
          <button type="submit">
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={styles.tasksWrapper}>
          <header className={styles.tasksInfo}>
            <p className={styles.createdTasks}>
              <span></span>
            </p>
            <p className={styles.completedTasks}>
              <span></span>
            </p>
          </header>

          <div className={styles.tasksList}></div>
        </div>
      </main>
    </>
  );
}

export default App;
