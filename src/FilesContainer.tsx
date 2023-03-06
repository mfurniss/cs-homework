import React, { useState } from "react";
import styled from 'styled-components';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { File } from "./useFiles";
import Checkbox from "./Checkbox";
import Table from "./Table";
import FileRow from "./FileRow";

interface Props {
  files: File[]
}

const a =new Array(10).fill(false);

const FilesContainer: React.FC<Props> = ({ files }) => {
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState<boolean[]>(new Array(files.length).fill(false))

  console.log('selected', selected);

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
        { files.map((file: File, index: number) => (
          <FileRow
            key={file.name}
            file={file}
            selected={selected[index]}
            onChange={(selected) => {
              console.log(selected, file);
              setSelected((prev) => {
                const r = [...prev];
                r[index] = selected;
                return r;
              });
            }}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default FilesContainer;