import React, { FC } from 'react'
import { Property } from '../../helper/Types';
import { Grid, Stack } from '@mui/material';

interface IProps{
  datas:Property
}
const IndividualProperties:FC<IProps> = ({datas}) => {
  console.log(datas)
  return (
    <Grid item xs={3}>

    </Grid>
  )
}

export default IndividualProperties