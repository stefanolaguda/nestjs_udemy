import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './dto/task.entity';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

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

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  deleteTask(id: string): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }

  updateTask(id: string, status: TaskStatus): Promise<Task> {
    return this.tasksRepository.updateTask(id, status);
  }
}
