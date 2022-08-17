/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Grid,Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components';


const index = () => {
  const [arrays,setArray]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
const ScheduleContainer = styled(Grid)`
background-color: red;
width: 1300vh;
`;
  return (
    <Box>
        <ScheduleContainer container direction='row'>
            <Grid item xs={12}>
                çalişanlar
            </Grid>
            {arrays.map(data=>(
              <Grid item key={data} style={{maxWidth:'200px'}}>
              <Grid container direction='column'>
              {arrays.map(data=>(
               <Grid item>
                 <Button variant='contained' color='primary'>
                  {data}
                </Button>
               </Grid>
              ))}
              </Grid>
            </Grid>
            ))}
        </ScheduleContainer>
    </Box>
  )
}

export default index