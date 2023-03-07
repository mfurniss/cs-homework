import React, { useState } from "react";
import { File } from "./useFiles";
import Checkbox from "./Checkbox";
import { SelectedIcon, Status } from "./Styled";

interface Props {
  file: File
  selected: boolean
  onChange: (selected: boolean) => void
}

const FileRow: React.FC<Props> = ({ file, selected, onChange }) => (
  <tr data-selected={selected}>
    <td>
      <Checkbox
        disabled={file.status !== 'available'}
        checked={selected}
        onChange={(selected: boolean) => onChange(selected)}
      />
    </td>
    <td>{file.name}</td>
    <td>{file.device}</td>
    <td>{file.path}</td>
    <td>
      <SelectedIcon style={{ visibility: file.status === 'available' ? 'visible' : 'hidden' }} />
    </td>
    <td style={{ textTransform: 'capitalize' }}>
      {file.status}
    </td>
  </tr>
);

export default FileRow;
