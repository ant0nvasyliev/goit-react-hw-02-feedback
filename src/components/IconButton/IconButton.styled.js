import styled from 'styled-components';

export const Button = styled.button`
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
height: 45px;
padding: 8px 16px;
border: none;
border-radius: 6px;
cursor: pointer;
svg {
   width: 30px;
   height: 30px;
};
color: ${props => {
   switch(props.$status) {
      case 'smile':
         return '#008000';
      case 'neutral':
         return '#b3b300';
      case 'sad':
         return '#cc0000';
         default:
            return 'transparent';
   }
}};

:hover {
   color: ${props => {
   switch(props.$status) {
      case 'smile':
         return '#00b300';
      case 'neutral':
         return '#e6e600';
      case 'sad':
         return '#ff1a1a';
         default:
            return 'transparent';
   }
}};
}
`;
