import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Redução média das emissões de carbono</Title>
      <Typography component="h4" variant="h5">
        3000.00 Toneladas CO2
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Janeiro de 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver detalhes
        </Link>
      </div>
    </React.Fragment>
  );
}