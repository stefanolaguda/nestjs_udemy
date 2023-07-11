import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-model.interface';

export class GetTasksFilter {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
