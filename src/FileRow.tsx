import React from "react";
import { File, FileStatus } from "./useFiles";
import Checkbox from "./Checkbox";
import { SelectedIcon } from "./Styled";

interface Props {
  file: File
  selected: boolean
  onChange: (selected: boolean) => void
}

const FileRow: React.FC<Props> = ({ file, selected, onChange }) => (
  <tr data-selected={selected}>
    <td>
      <Checkbox
        disabled={file.status !== FileStatus.Available}
        checked={selected}
        onChange={(selected: boolean) => onChange(selected)}
      />
    </td>
    <td>{file.name}</td>
    <td>{file.device}</td>
    <td>{file.path}</td>
    <td>
      <SelectedIcon
        style={{
          visibility: file.status === FileStatus.Available ? 'visible' : 'hidden'
        }}
      />
    </td>
    <td style={{ textTransform: 'capitalize' }}>
      {file.status}
    </td>
  </tr>
);

export default FileRow;
