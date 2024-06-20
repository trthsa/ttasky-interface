import { IShiftWork } from '../interface/task.interface';
const MOCK_TASKS: IShiftWork[] = [
  {
    id: '0',
    title: 'Waiter',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    currentMembersCount: 2,
    totalMembersCount: 3,
    tasks: [
      {
        id: '0',
        name: 'Serve food',
      },
    ],
    disabled: true,
  },
  {
    id: '1',
    title: 'Chef',
    startTime: '12:00 PM',
    currentMembersCount: 2,
    totalMembersCount: 3,
    endTime: '2:00 PM',
    tasks: [
      {
        id: '1',
        name: 'Cook food',
      },
    ],
  },
  {
    id: '2',
    title: 'Cashier',
    startTime: '2:00 PM',
    currentMembersCount: 2,
    totalMembersCount: 3,
    endTime: '4:00 PM',
    tasks: [
      {
        id: '2',
        name: 'Handle cash',
      },
    ],
  },
  {
    id: '3',
    title: 'Manager',
    startTime: '4:00 PM',
    currentMembersCount: 2,
    totalMembersCount: 3,
    endTime: '6:00 PM',
    tasks: [
      {
        id: '3',
        name: 'Manage staff',
      },
    ],
  },
  {
    id: '4',
    title: 'Janitor',
    startTime: '6:00 PM',
    currentMembersCount: 2,
    totalMembersCount: 3,
    endTime: '8:00 PM',
    tasks: [
      {
        id: '4',
        name: 'Clean tables',
      },
    ],
  },
];
export { MOCK_TASKS };
