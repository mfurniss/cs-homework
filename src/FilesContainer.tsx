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
  const [selected, setSelected] = useState<boolean[]>(new Array(files.length).fill(false))


  const handleSelectAll = () => {
    const allSelected = selected.every((s) => s);
  
    if (allSelected) {
      setSelected(new Array(files.length).fill(false));
    } 
    if (!allSelected) {
      setSelected(new Array(files.length).fill(true));
    } 
    console.log('handleSelectAll');
  };

  const countSelected = selected.reduce((acc, current) => acc + (current ? 1 : 0), 0);
  console.log('countSelected', countSelected);

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Checkbox
              checked={countSelected > 0}
              onChange={(checked: boolean) => handleSelectAll()}
              nodeChecked={countSelected < files.length ? <MdIndeterminateCheckBox size={24} /> : undefined}
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