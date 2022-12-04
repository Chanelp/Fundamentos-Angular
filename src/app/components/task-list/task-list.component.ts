import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  //TODO: Reformular como una lista de tareas

  task1: ITask = {
    title: 'Title 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Title 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    //TODO:Sustituir con un splice para eliminar de la lista de tareas
    alert(`Se procede a eliminar la tarea ${task.title}`)
  }

}
