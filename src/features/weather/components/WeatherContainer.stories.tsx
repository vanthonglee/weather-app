import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { WeatherContainer } from 'features/weather/components/WeatherContainer'

export default {
  title: 'features/components/weather/WeatherContainer',
  component: WeatherContainer,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof WeatherContainer>

const Template: ComponentStory<typeof WeatherContainer> = () => <WeatherContainer />

export const Primary = Template.bind({})
Primary.args = {}
