import styled from "styled-components";

const borderColor = '#bbb';

export default styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  th, td {
    padding: 10px;
    text-align: left;
    font-weight: normal;
  }
  thead {
    tr {
      th {
        font-size: 18px;
        border-top: 1px solid ${borderColor};
      }
    }
  }
  tbody {
    tr {
      td {
        font-size: 16px;
        border-top: 1px solid ${borderColor};
      }
    }
  }
`;
