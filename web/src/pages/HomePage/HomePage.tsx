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
    <div className="min-h-screen flex flex-col justify-center">
      <MetaTags title="Home" description="Home page" />
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold">Redwood Weather Station</h1>

        <Form
          onSubmit={onSubmit}
          className="flex items-center justify-center mt-4 mb-8"
        >
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
      </div>
    </div>
  )
}

export default HomePage
