import styled from "styled-components";

const color = {
  border: '#d0d0d0',
  hover: '#f5f5f5',
  selected: '#e8e8e8',
}

export const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  border: 1px solid ${color.border};
  th, td {
    padding: 10px;
    text-align: left;
    font-weight: normal;
    line-height: 0;
  }
  thead {
    tr {
      th {
        font-size: 18px;
        border-top: 1px solid ${color.border};
      }
    }
  }
  tbody {
    tr {
      transition: background-color 200ms;
      &:hover {
        background-color: ${color.hover};
      }
      &[data-selected=true] {
        background-color: ${color.selected};
      }
      td {
        font-size: 14px;
        border-top: 1px solid ${color.border};
      }
    }
  }
`;

export const DownloadButton = styled.button`
  border: none;
  padding: 0;
  margin: 0 0 0 50px;
  background: none;
  color: inherit;

  svg {
    margin-right: 8px;
    transform: translateY(3px);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const SelectedIcon = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  background-color: #55cd55;
  border-radius: 50%;
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
`;
