import { fetch } from 'cross-undici-fetch'

import { UserInputError } from '@redwoodjs/graphql-server'

export const getWeather = async ({ zip }) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${process.env.WEATHER_API}`
  )
  const json = await response.json()

  if (json.cod === '404') {
    throw new UserInputError(
      `${zip} isn't a valid US zip code, please try again`
    )
  }

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 9) / 5 + 32),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
