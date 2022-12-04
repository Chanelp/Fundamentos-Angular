//Esto será lo que se renderice en cada lista de tareas

export enum Levels {
  "Info",
  "Urgent",
  "Bloking"
}

export interface ITask {
  title: string;
  description?: string;
  completed: boolean;
  level: Levels;
}
