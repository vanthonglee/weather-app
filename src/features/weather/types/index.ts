// Weather Forcast
export type WeatherForcast = {
  Minium: Temperature
  Maximum: Temperature
}

type Temperature = {
  Value: number
  Unit: string
}
