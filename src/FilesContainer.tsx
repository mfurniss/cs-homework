import React, { useState } from "react";
import styled from 'styled-components';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { File } from "./useFiles";
import Checkbox from "./Checkbox";
import Table from "./Table";

interface Props {
  files: File[]
}

const FilesContainer: React.FC<Props> = ({ files }) => {
  const [allSelected, setAllSelected] = useState(false);


  console.log('files', files);
  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Checkbox
              checked={allSelected}
              onChange={(checked: boolean) => setAllSelected(checked)}
              nodeChecked={<MdIndeterminateCheckBox size={24} />}
            />
          </th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { files.map((file: File) => (
        <tr key={file.name}>
          <td>
            <Checkbox
              checked={allSelected}
              onChange={(checked: boolean) => setAllSelected(checked)}
            />
          </td>
          <td>{file.name}</td>
          <td>Device</td>
          <td>Path</td>
          <td>Status</td>
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default FilesContainer;