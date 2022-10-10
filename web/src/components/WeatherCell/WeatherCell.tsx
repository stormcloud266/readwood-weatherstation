import type { FindWeatherQuery, FindWeatherQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindWeatherQuery($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWeatherQueryVariables>) => (
  <div className="border-l-2 border-red-900/50 py-2 px-4 bg-red-200 rounded-sm text-red-900">
    {error?.message}
  </div>
)

export const Success = ({
  weather,
}: CellSuccessProps<FindWeatherQuery, FindWeatherQueryVariables>) => {
  return (
    <section className="">
      <h1>{weather.city}</h1>
      <h2>
        <img src={weather.icon} className="w-12 h-12" alt="" />
        <span>
          {weather.temp}°F and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
