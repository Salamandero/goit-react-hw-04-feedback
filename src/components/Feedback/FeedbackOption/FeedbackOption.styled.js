import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const BtnFeedback = styled.button`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  border: none;
  justify-content: center;
  cursor: pointer;
  width: 56px;

  &:nth-of-type(1):hover {
    scale: 1.1;
    background-color: #5adb1a;
  }
  &:nth-of-type(2):hover {
    scale: 1.1;
    background-color: #f3fa21;
  }
  &:nth-of-type(3):hover {
    scale: 1.1;
    background-color: #fb7743;
  }
`;
