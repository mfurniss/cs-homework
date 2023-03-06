import data from "../mocks/files.json";

export interface File {
  name: string
  device: string
  path: string
  status: string
}

export default (): File[] => data;
