import data from "../mocks/files.json";

export interface File {
  name: string
  device: string
  path: string
  status: string
}

export enum FileStatus {
  Available = 'available',
  Scheduled = 'scheduled'
}

export default (): File[] => data;
