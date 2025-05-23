import { Membership } from '@/types/usertypes';
import { Task } from './tasktypes';

export interface MemberProps {
  profileUrl?: string | null;
  name: string;
  email: string;
  onClick: () => void;
  userId: number;
  hideMenu?: boolean;
}

export type ProgressProp = {
  percentage: number;
};

export interface NewestTaskProps {
  title: string;
  startDate?: string;
}

export type GroupPageInfo = Pick<Membership, 'role'> & {
  group: Pick<Membership['group'], 'id' | 'name'>;
};

export type TaskInfo = Pick<Task, 'id' | 'name' | 'description' | 'date' | 'doneAt'>;

export interface ReportProps {
  total: number;
  completed: number;
  newestTasks?: NewestTaskProps[];
}
