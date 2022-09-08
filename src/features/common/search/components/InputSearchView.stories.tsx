import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputSearchView } from 'features/common/search/components/InputSearchView'

export default {
  title: 'features/components/common/InputSearchView',
  component: InputSearchView,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof InputSearchView>

const Template: ComponentStory<typeof InputSearchView> = args => <InputSearchView {...args} />

export const Primary = Template.bind({})
Primary.args = {
  suggests: [
    { Key: '1111', LocalizedName: 'Ho Chi Minh' },
    { Key: '1111', LocalizedName: 'Ha Noi' },
  ],
}
