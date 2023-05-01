import { ITask } from "../interfaces";

interface IProps {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: IProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <div>
        <button onClick={() => completeTask(task.taskName)}>X</button>
      </div>
    </div>
  );
};

export default TodoTask;
