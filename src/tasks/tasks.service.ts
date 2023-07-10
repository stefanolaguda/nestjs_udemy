import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatus } from './task-model.interface';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];

  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  getSingleTask(id: string): TaskModel {
    console.log(id);
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): TaskModel {
    const { title, description } = createTaskDto;

    const task: TaskModel = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): TaskModel[] {
    return (this.tasks = this.tasks.filter((task) => task.id !== id));
  }

  updateTaskStatus(id: string, status: TaskStatus): TaskModel {
    const task: TaskModel = this.getSingleTask(id);
    task.status = status;
    return task;
  }
}
