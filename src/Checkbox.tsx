import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const CbButton = styled.button<{ checked: boolean }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  color: ${({ checked }) => checked ? '#3992b3': '#a0a0a0'};
`;

interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  nodeChecked?: React.ReactNode
  nodeUnchecked?: React.ReactNode
}

const Checkbox: React.FC<Props> = ({
  checked,
  onChange,
  nodeChecked = <MdCheckBox size={24} />,
  nodeUnchecked = <MdCheckBoxOutlineBlank size={24} />,
}) => {
  return (
    <CbButton checked={checked} onClick={() => onChange(!checked)}>
      { checked ? nodeChecked : nodeUnchecked}
    </CbButton>
  )
}

export default Checkbox;