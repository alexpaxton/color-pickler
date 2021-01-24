// Libraries
import styled from "@emotion/styled";

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const MobileContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 20px;
`;

export const MobileHeader = styled.h1`
  user-select: none;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`
