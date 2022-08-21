import { Grid, Button, Typography, Avatar } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import '../Test/index.css'

const index = () => {
  const [arrays, setArray]=useState([1, 2, 3, 4, 5, 6])
  const Clocks=[
    '10:00',
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "18:00",
    "17:30",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30"
  ]
  const ScheduleContainer = styled.td`
background-color: white;
  border: 1px solid gray
`
  const StyledTBody = styled.tbody`
width: ${arrays.length*12}vh !important;
`
  const StyledTh = styled.th`
  z-index: 1;
  text-align: center;
  background: white;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
`
  const StyledButton = styled.div`
  height: 7vh;
  @media only screen and (max-width: 576px) {
    height: 18vh;
  }
`
  const StyledTimeContainer=styled(Grid)`
  width: 45px;
  position: relative;
  height: 100%;
  `
  const StyledTimeText=styled(Typography)`
  position: absolute; 
  top: -10px; 
  right: 5px;
  color: gray !important;
  font-size:14px !important;
  z-index: 1;
  @media only screen and (max-width: 576px) {
    font-size:10px !important;
    top: -7px; 
  }
  `
  const StyledThContainer=styled.div`
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
  padding: 20px;
  `
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <StyledTh></StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Eemy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Temy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Femy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Demy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
          </tr>
        </thead>
        <StyledTBody>
          {Clocks.map((dataRow, index) => (
            <tr>
              <Grid container direction='column'>
                <StyledTimeContainer item>
                  <StyledTimeText>
                    {dataRow}
                  </StyledTimeText>
                </StyledTimeContainer>
              </Grid>
              {arrays.map((data, index) => (
                <ScheduleContainer>
                  <Grid item key={data} style={{ width: '40vh' }}>
                    <Grid container direction='column'>
                      <Grid item style={{ width: '100%' }}>
                        <StyledButton
                          variant='contained'
                        >
                        </StyledButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </ScheduleContainer>
              ))}
            </tr>
          ))}
        </StyledTBody>
      </table>
    </Fragment>
  )
}

export default index
