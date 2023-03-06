import React, { useState } from "react";
import styled from 'styled-components';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { File } from "./useFiles";
import Checkbox from "./Checkbox";
import Table from "./Table";

interface Props {
  file: File
  selected: boolean
  onChange: (selected: boolean) => void
}

const FileRow: React.FC<Props> = ({ file, selected, onChange }) => {
  return (
    <tr>
      <td>
        <Checkbox
          checked={selected}
          onChange={(selected: boolean) => onChange(selected)}
        />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>{file.status}</td>
    </tr>
  );
}

export default FileRow;