import { TaskStatus } from '../task-model.interface';

export class GetTasksFilter {
  status?: TaskStatus;
  search?: string;
}
