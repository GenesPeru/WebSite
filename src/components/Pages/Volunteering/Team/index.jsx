import React from 'react';
import { Box, TitleTeam, Semester, LogoUniversity } from './styles';

export default ({ name, semester, photo }) => (
  <Box>
    <TitleTeam>{name}</TitleTeam>
    <Semester>{semester}</Semester>
    <LogoUniversity src={photo} alt='Universidad' />
  </Box>
);
