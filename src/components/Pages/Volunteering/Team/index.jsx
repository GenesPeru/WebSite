import React from 'react';
import { Box, TitleTeam, Semester } from './styles';

export default ({ name, semester }) => (
  <Box>
    <TitleTeam>{name}</TitleTeam>
    <Semester>{semester}</Semester>
  </Box>
);
