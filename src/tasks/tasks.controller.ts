import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from './task-model.interface';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body('title') title, @Body('description') description) {
    console.log(title);
    console.log(description);
    return this.tasksService.createTask(title, description);
  }
}
