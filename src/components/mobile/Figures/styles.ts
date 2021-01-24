import styled from "@emotion/styled";

export const FiguresContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 20px;
`;

interface FiguresSwatchProps {
  hex: string;
}

export const FiguresSwatch = styled.div<FiguresSwatchProps>`
  flex: 1 0 0;
  border-radius: 3px;
  margin: 0 4px;
  background-color: ${(props) => props.hex};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  text-transform: uppercase;
  user-select: none;
  font-size: 20px;
`;

export const FiguresSection = styled.dl`
  border-radius: 3px;
  background-color: #222;
  flex: 0 0 70px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const FiguresRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FiguresLabel = styled.dt`
  color: #666;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
`;

export const FiguresValue = styled.dd`
  font-size: 16px;
  font-family: monospace;
  text-transform: uppercase;
  user-select: none;
`;
