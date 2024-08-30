import type { Meta, StoryObj } from '@storybook/react';
import ComingSoonSection from './ComingSoonSection';

const meta = {
  title: 'Example/ComingSoonSection',
  component: ComingSoonSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ComingSoonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleComingSoonSection: Story = {
  args: {},
};
