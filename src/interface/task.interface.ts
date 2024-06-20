interface IShiftWork {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  totalMembersCount: number;
  currentMembersCount: number;
  tasks: ITask[];
  disabled?: boolean;
}

interface ITask {
  id: string;
  name: string;
}

export type { IShiftWork, ITask };
