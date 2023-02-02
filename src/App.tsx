import { PlusCircle, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import styles from './App.module.css';
import clipboardPath from './assets/clipboard.svg';
import logoPath from './assets/todo-list-logo.svg';

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

function App(): React.ReactElement {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      content:
        // eslint-disable-next-line max-len
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
    {
      id: 2,
      content:
        // eslint-disable-next-line max-len
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    },
  ]);

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
              Tarefas criadas
              <span>0</span>
            </p>
            <p className={styles.completedTasks}>
              Concluídas
              <span>0 de 0</span>
            </p>
          </header>

          <div className={styles.tasksList}>
            {tasks.length === 0 ? (
              <div className={styles.emptyList}>
                <img src={clipboardPath} alt="Clipboard icon" title="Clipboard icon" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className={styles.task}>
                  <label className={styles.checkbox}>
                    <input type="checkbox" checked={task.isCompleted} />
                    <span className={styles.checked} />
                  </label>
                  <p className={task.isCompleted ? styles.isChecked : ''}>{task.content}</p>
                  <button className={styles.trash}>
                    <Trash size={24} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
