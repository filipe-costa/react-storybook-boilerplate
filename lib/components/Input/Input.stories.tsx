import React, {ComponentProps} from 'react'
import {Story} from '@storybook/react'

import {Input} from './Input'

export default {
  title: 'Input',
  component: Input
}

const Template: Story<ComponentProps<typeof Input>> = (args) => <Input {...args} />

export const InputStory = Template.bind({})
InputStory.args = {
  label: "Name"
}