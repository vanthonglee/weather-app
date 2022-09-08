import { get5DayDailyForcasts } from 'features/weather/api/index'
import fixture from 'test/msw/fixtures/db.initial.data.json'

describe('Forcast API test', () => {
  it('Fetch 5 Day Daily Forcasts', async () => {
    // Given
    const { weathers } = fixture

    // When
    const result = await get5DayDailyForcasts('1111')

    // Then
    expect(result).toEqual(weathers[0])
  })
})
