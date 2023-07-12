/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { styled } from "styled-components";

const ElementList = styled.div<{ hastitle: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex: 1;

  ${(props) => props.hastitle ? 'padding: 0 0 3rem 0' : ''}
`;

export default ElementList;
