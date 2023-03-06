import styled from "styled-components";

const color = {
  border: '#d0d0d0',
  hover: '#f5f5f5',
  selected: '#e8e8e8',
}

export default styled.table`
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
      &:hover {
        background-color: ${color.hover};
      }
      &[data-selected=true] {
        background-color: ${color.selected};
      }
      td {
        font-size: 16px;
        border-top: 1px solid ${color.border};
      }
    }
  }
`;
