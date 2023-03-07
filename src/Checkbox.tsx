import React from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const CbButton = styled.button<{ checked: boolean }>`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  color: ${({ checked }) => checked ? '#3992b3': '#a0a0a0'};
  &:disabled {
    color: #d0d0d0;
  }
`;

interface Props {
  checked: boolean
  disabled?: boolean | undefined
  onChange: (checked: boolean) => void
  nodeChecked?: React.ReactNode
  nodeUnchecked?: React.ReactNode
}

const Checkbox: React.FC<Props> = ({
  checked,
  disabled = false,
  onChange,
  nodeChecked = <MdCheckBox size={24} />,
  nodeUnchecked = <MdCheckBoxOutlineBlank size={24} />,
}) => {
  return (
    <CbButton
      checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
    >
      {checked ? nodeChecked : nodeUnchecked}
    </CbButton>
  )
}

export default Checkbox;
