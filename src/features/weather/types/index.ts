// Weather Forcast
export type WeatherForcast = {
  Date: string
  Temperature: {
    Minimum: TemDegree
    Maximum: TemDegree
  }
}

type TemDegree = {
  Value: number
  Unit: string
}
