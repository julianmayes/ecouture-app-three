import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

export default function MyApp({}) {
  const [choices, setChoices] = useState([])

  return (
    <>
      <SurveyPage
        title='How many times do you do laundry a month?'
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form5'
        page='form4'
        waterHeight='75'
        buttons={['1', '2-3', '4-5', '6+']}
        dialogue='Buying used clothing can reduce your carbon footprint.'
      ></SurveyPage>
    </>
  )
}
