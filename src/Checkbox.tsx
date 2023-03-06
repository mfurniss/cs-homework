import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  color: #3992b3;
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
    <Button onClick={() => onChange(!checked)}>
      { checked ? nodeChecked : nodeUnchecked}
    </Button>
  )
}

export default Checkbox;
