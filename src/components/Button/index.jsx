import React from 'react';

import { StyledButton } from './styles.js';

export default ({ children, primary }) => (
  <>
    <StyledButton primary={primary}>{children}</StyledButton>
  </>
);
