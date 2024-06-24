import { BaseContainer } from './BaseContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/BaseContainer',
  component: BaseContainer,
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof BaseContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: 'Hello, World!',
  },
} satisfies Story;
