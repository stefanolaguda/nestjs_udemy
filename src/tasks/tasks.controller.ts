import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from './task-model.interface';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTasks();
  }
}
