// Weather Forcast
export type WeatherForcast = {
  Date: string
  Temperature: {
    Minimum: Temperature
    Maximum: Temperature
  }
}

type Temperature = {
  Value: number
  Unit: string
}
