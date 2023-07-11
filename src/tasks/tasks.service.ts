import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskModel, TaskStatus } from './task-model.interface';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilter } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];

  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilter) {
    const { status, search } = filterDto;

    let tasks: TaskModel[] = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return tasks;
  }

  getSingleTask(id: string): TaskModel {
    // try to get task
    // if not found, throw an error (404 not found)
    // otherwise, return the found task
    const foundTask = this.tasks.find((task) => task.id === id);

    console.log(id);

    if (!foundTask) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    } else {
      return this.tasks.find((task) => task.id === id);
    }
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
    const foundTask = this.getSingleTask(id);

    return (this.tasks = this.tasks.filter((task) => task.id !== foundTask.id));
  }

  updateTaskStatus(id: string, status: TaskStatus): TaskModel {
    const task: TaskModel = this.getSingleTask(id);
    task.status = status;
    return task;
  }
}
