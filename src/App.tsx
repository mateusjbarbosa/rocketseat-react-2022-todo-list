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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter((t) => t.isCompleted).length;

  function handleNewTask(e: React.FormEvent) {
    e.preventDefault();

    setTasks((currentState) => [
      ...currentState,
      {
        id: tasks.length + 1,
        content: task,
        isCompleted: false,
      },
    ]);

    setTask('');
  }

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleCheckTask(e: React.ChangeEvent<HTMLInputElement>, taskId: number) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.isCompleted = !t.isCompleted;

        return t;
      }
      return t;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskId: number) {
    const tasksWithoutRemovedOne = tasks.filter((t) => t.id !== taskId);

    setTasks(tasksWithoutRemovedOne);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logoPath} alt="ToDo List logo" title="ToDo List logo" />
      </header>

      <main className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleNewTask}>
          <input
            name="task"
            onChange={handleTaskChange}
            placeholder="Adicione uma nova tarefa"
            required
            value={task}
          />
          <button type="submit">
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={styles.tasksWrapper}>
          <header className={styles.tasksInfo}>
            <p className={styles.createdTasks}>
              Tarefas criadas
              <span>{createdTasksCount}</span>
            </p>
            <p className={styles.completedTasks}>
              Concluídas
              <span>
                {completedTasksCount} de {createdTasksCount}
              </span>
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
                    <input
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={(e) => handleCheckTask(e, task.id)}
                    />
                    <span className={styles.checked} />
                  </label>
                  <p className={task.isCompleted ? styles.isChecked : ''}>{task.content}</p>
                  <button className={styles.trash} onClick={() => handleRemoveTask(task.id)}>
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
