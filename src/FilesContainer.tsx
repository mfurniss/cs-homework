import React, { useState } from "react";
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';
import { File, FileStatus } from "./useFiles";
import Checkbox from "./Checkbox";
import { Table, DownloadButton } from "./Styled";
import FileRow from "./FileRow";

interface Props {
  files: File[]
}

const FilesContainer: React.FC<Props> = ({ files }) => {
  const [selected, setSelected] = useState<boolean[]>(new Array(files.length).fill(false))

  const countSelected = selected.reduce((acc, current) => acc + (current ? 1 : 0), 0);
  const countSelectable = files.reduce((acc, current) => acc + (current.status === FileStatus.Available ? 1 : 0), 0);

  const handleSelectAll = (checked: boolean):void => {
    if (!checked) {
      setSelected(new Array(files.length).fill(false));
    } else {
      setSelected(files.map((file: File) => file.status === FileStatus.Available));
    }
  };

  const handleDownload = ():void => {
    const text = files.reduce((next: string, file: File, index: number):string => {
      if (!selected[index]) {
        return next;
      }
      return `${next}Path: ${file.path}\nDevice:${file.device}\n\n`
    }, '');

    alert(text);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Checkbox
              checked={countSelected > 0}
              onChange={(checked: boolean) => handleSelectAll(checked)}
              nodeChecked={countSelected < countSelectable ? <MdIndeterminateCheckBox size={24} /> : undefined}
            />
          </th>
          <th colSpan={5}>
            {countSelected ? `Selected ${countSelected}` : 'None Selected'}
            <DownloadButton onClick={handleDownload} disabled={!countSelected}>
              <IoMdDownload />
              Download Selected
            </DownloadButton>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: '44px' }}>
          <th></th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th style={{ width: '1%' }}></th>
          <th>Status</th>
        </tr>
        { files.map((file: File, index: number) => (
          <FileRow
            key={file.name}
            file={file}
            selected={selected[index]}
            onChange={(selected) => {
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
