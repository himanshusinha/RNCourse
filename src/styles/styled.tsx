import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: red;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface StyledCustomTextProps {
  color?: string;
}

export const StyledCustomText = styled.Text<StyledCustomTextProps>`
  font-size: 30px;
  color: ${({ color }) => color};
`;
