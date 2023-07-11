import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-model.interface';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
