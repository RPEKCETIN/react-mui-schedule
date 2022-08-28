import { Grid, Button, Typography, Avatar } from '@material-ui/core'
import { ChevronRight, ChevronLeft } from '@material-ui/icons'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

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
  const StyledHeaderContainer=styled.div`
  width: 100%;
  position: fixed;
  background-color: white;
  height: 8vh;
  padding: 20px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
  @media only screen and (min-width: 1920px) {
    height: 7vh;
  }
`
  const StyledButton = styled.div`
  height: 7vh;
`
  const StyledTimeContainer=styled(Grid)`
  width: 45px;
  position: relative;
  height: 45px;
  @media only screen and (max-width: 576px) {
    height: 20px;
    width: 35px;
  }
  @media only screen and (min-width: 1920px) {
    width: 55px;
  }
  `
  const StyledTimeText=styled(Typography)`
  position: absolute; 
  top: -2vh; 
  right: 5px;
  color: gray !important;
  font-size:14px !important;
  z-index: 1;
  @media only screen and (max-width: 576px) {
    font-size:10px !important;
    top: -5vh; 
  }
  @media only screen and (min-width: 1920px) {
    font-size:18px !important;
    top: -3.3vh; 
  }
  `
  const StyledThContainer=styled.div`
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: center;
  padding: 20px;
  `
  const StyledClockTh=styled.th`
  position: sticky;
  left: 0; /* Don't forget this, required for the stickiness */
  `
  const StyledAvatar=styled(Avatar)`
  width: 8vh !important;
  height: 8vh !important;
  `
  const StyledTable=styled.table`
  z-index: 1;
  text-align: left;
  position: relative;
  border-collapse: collapse; 
  `
  const StyledScrollButton=styled(Button)`
    width: 8vh !important;
    min-width: 8vh !important;
    height: 8vh !important;
    min-height: 8vh !important;
    padding: 0 !important;
    border-radius: 100% !important;
    @media only screen and (max-width: 576px) {
      width: 10vh !important;
      min-width: 10vh !important;
      height: 10vh !important;
      min-height: 10vh !important
    }
    @media only screen and (min-width: 1920px) {
      width: 4vh !important;
      min-width: 4vh !important;
      height: 4vh !important;
      min-height: 4vh !important
    }
  `
  const ScrollButtonContainer=styled(Grid)`
  z-index: 2;
  position: fixed;
   top: 50%;
    width: 100%;
  `
  const StyledClockMainTh=styled.th`
  position: fixed;
   z-index: 2; 
   height: 100%; 
   width: 45px;
   @media only screen and (max-width: 576px) {
    width: 35px !important;
  }
  `
  const StyleCloseClockDiv=styled.div`
  z-index: 6;
  width: 45px;
  position: fixed;
  height: 60px;
  background-color: white;
  @media only screen and (max-width: 576px) {
    width: 35px !important;
    height: 40px;
  }
  `
  const LeftScrollGrid=styled(Grid)`
   margin-left: 50px !important;
   @media only screen and (max-width: 576px) {
   margin-left: 40px !important;
    
  }
  @media only screen and (min-width: 1920px) {
    margin-left: 90px !important;
  }
  `
  const ScrollsForward=() => {
    window.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth"
    })
  }
  const ScrollsBackward=() => {
    window.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth"
    })
  }
  return (
    <Fragment>
      <StyledTable >
        <thead>
          <tr>
            <StyleCloseClockDiv/>
            <StyledClockMainTh/>
            <StyledHeaderContainer />
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Eemy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Temy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Femy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Demy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
            <StyledTh>
              <StyledThContainer>
                <StyledAvatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledThContainer>
            </StyledTh>
          </tr>
        </thead>
        <StyledTBody id='TestContainer'>
          {Clocks.map((dataRow, index) => (
            <tr>
              <StyledClockTh style={{ zIndex: 3 }}>
                <StyledTimeContainer item>
                  <StyledTimeText>
                    {dataRow}
                  </StyledTimeText>
                </StyledTimeContainer>
              </StyledClockTh>
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
        <ScrollButtonContainer
          container
          justifyContent='space-between'
          alignItems='center'
        >
          <LeftScrollGrid item>
            <StyledScrollButton
              className="bg-blue-opacity"
              color='primary'
              variant='contained'
              onClick={ScrollsBackward}>
              <ChevronLeft style={{ width: '100%', height: '100%' }} />
            </StyledScrollButton>
          </LeftScrollGrid>
          <Grid item>
            <StyledScrollButton
              className="bg-blue-opacity"
              color='primary'
              variant='contained'
              onClick={ScrollsForward}>
              <ChevronRight style={{ width: '100%', height: '100%' }}/>
            </StyledScrollButton>
          </Grid>
        </ScrollButtonContainer>
      </StyledTable>
    </Fragment>
  )
}

export default index
