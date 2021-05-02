import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify'
import { useRouter } from 'next/router'
import { RoundBlueButton } from '@/components/RoundBlueButton';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const CompletionCard = styled.div`
  
  width: 90vw;
  height:80vh;
  background: white;
  top: 10vw;
  z-index: 1000;
  border-radius: 25px;
  border: 1px solid ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10vh 0 10vh 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  transition:0.5s ease;

`



export const CompletionInformation = styled.div`
  
width: 80%;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.green};
font-size: 18px;
font-weight: 700;
font-family: Nunito;

`

export const CompletionFact= styled.div`
  
width: 80%;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.blue};
font-size: 18px;
font-weight: 700;
font-family: Nunito;
text-align: center;

`




export const Information = styled.div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
`
const Space = styled.div`
  width: 10px;
`

export const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-family: Nunito;
  z-index: 500;
  animation: 3s blink infinite;
`

const Plastic = styled.img`
  width: 20vw;
  
  z-index: 200;
  position: absolute;
  bottom: 35vh;
  animation: float 3s infinite;
  cursor: pointer;
  max-width: 100px;
  padding: 10px;


`

const Impact = () => {
  const props = useSpring({
    config: { duration: 2250 },
    number: 70,
    from: { number: 0 },
  })

  let count = 0

  const router = useRouter()

  const handleClick = (e) => {
    e.target.style.display = 'none'
    count++

    if (count == 3) {
      setCompleteTask(true)
      /* setInstructions('swipe up to see how you can help') */
    }
  }

  const [completeTask, setCompleteTask] = useState(false)

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState('Click to pick up the microfibers from the ocean')

  return (

    <>

    <Container>

    <CompletionCard
    style={{
      
      transform: completeTask ? 'translateY(0)' : 'translateY(100vh)'
    }}>

    <CompletionInformation>
 
    You've unlocked a tip!
    </CompletionInformation>

      <img 
         style={{
          width: '100px',
          animation: 'float 3s infinite',
        }}
      src="/microfiber.png"/>

    <CompletionFact>
 
    To reduce the microfibers you produce, buy natural textiles and try washing less with cool water.
    </CompletionFact>

    <RoundBlueButton text={'more impacts'}/>

      </CompletionCard>

      <Information>
        U.S. and Canadian households release over 870 tons of plastic
        microfibers into the ocean every year from laundry alone.
      </Information>

      <Menu
        hide={hide}
        setHide={setHide}
        logo='/logo-small-blue.png'
        iconColor={colors.blue}
        three={true}
      />

      <ResultsUI>{instructions}</ResultsUI>

      <Plastic src="/microfiber.png"
        onClick={(e) => handleClick(e)}
        style={{
          left: '10%',
          animationDelay: '1s',
          zIndex: '200'
        }}
      />

<Plastic src="/microfiber.png"
        onClick={(e) => handleClick(e)}
        style={{
          left: '40%',
          animationDelay: '0.2s',
          zIndex: '200'
        }}
      />

<Plastic src="/microfiber.png"
 src="/microfiber.png"
        onClick={(e) => handleClick(e)}
        style={{
          left: '70%',
          animationDelay: '0.5s',
          zIndex: '200'
        }}
      />

<img style={{
        position: 'absolute',
        bottom: '0vh',
        width: '250%',
        height: '50vh',
        animation: '3s waves ease infinite'
      }} src="/water.png"/>
      <img style={{
        position: 'absolute',
        bottom: '0vh',
        width: '250%',
        height: '41vh',
        animation: '4s waves-2 ease infinite',
        
        zIndex: '400'
      }} src="/water-2.png"/>

    </Container>

    </>
  )
}

export default Impact