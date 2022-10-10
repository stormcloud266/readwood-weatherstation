import { useState } from 'react'

import { Form, TextField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1 className="text-blue-300">hey</h1>

      <Form onSubmit={onSubmit}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength={5}
          validation={{ required: true, pattern: /^\d{5}$/ }}
          className="border px-3 py-2"
        />
        <Submit className="bg-blue-300 px-6 py-2 rounded-sm ml-2">Go</Submit>
      </Form>

      {zip && <WeatherCell zip={zip} />}
    </>
  )
}

export default HomePage
