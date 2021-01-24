import styled from "@emotion/styled";

interface FiguresContainerProps {
  height: number;
}

export const FiguresContainer = styled.div<FiguresContainerProps>`
  height: ${(props) => props.height}px;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

interface FiguresSwatchProps {
  hex: string;
}

export const FiguresSwatch = styled.div<FiguresSwatchProps>`
  width: 130px;
  flex: 1 0 130px;
  border-radius: 3px;
  margin-bottom: 4px;
  background-color: ${(props) => props.hex};
`;

export const FiguresSection = styled.dl`
  border-radius: 3px;
  background-color: #222;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FiguresRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FiguresLabel = styled.dt`
  color: #666;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
`;

export const FiguresValue = styled.dd`
  font-size: 13px;
  font-family: monospace;
  text-transform: uppercase;
  user-select: none;
`;
