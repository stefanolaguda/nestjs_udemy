import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './dto/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // getAllTasks(): TaskModel[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTasksFilter) {
  //   const { status, search } = filterDto;

  //   let tasks: TaskModel[] = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search.toLowerCase()) ||
  //         task.description.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   return tasks;
  // }

  // async getTaskById(id: string): Promise<Task> {
  //   const found = await this.tasksRepository.findOne({ where: { id } });

  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }

  //   return found;
  // }

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  deleteTask(id: string): Promise<Task> {
    return this.tasksRepository.deleteTask(id);
  }
  // deleteTask(id: string): TaskModel[] {
  //   const foundTask = this.getSingleTask(id);
  //   return (this.tasks = this.tasks.filter((task) => task.id !== foundTask.id));
  // }
  // updateTaskStatus(id: string, status: TaskStatus): TaskModel {
  //   const task: TaskModel = this.getSingleTask(id);
  //   task.status = status;
  //   return task;
  // }
}
