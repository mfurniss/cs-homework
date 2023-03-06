import data from "../mocks/files.json";

export interface File {
  selected?: boolean | undefined
  name: string
  device: string
  path: string
  status: string
}

const files: File[] = data;

export default (): File[] => {
  return files;
}
