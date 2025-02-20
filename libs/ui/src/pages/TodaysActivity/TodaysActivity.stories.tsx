import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { TodaysActivity } from './TodaysActivity';

const args: ComponentProps<typeof TodaysActivity> = {
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  userName: 'Ahmed Elsakaan',
  greetingProps: {
    isLoading: false,
    greeting: 'Good morning, John Doe!',
    quote:
      '"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings." - Arthur Rubinstein',
  },
  recentModules: {
    isLoading: false,
    data: [
      {
        href: '/modules/1',
        icon: '🧠',
        name: 'Algorithms and Complexity',
        code: 'CS2860',
        color: 'red',
        credits: 15,
      },
      {
        href: '/modules/2',
        icon: '📽',
        name: 'IT Project Management',
        code: 'CS3003',
        color: 'green',
        credits: 15,
      },
      {
        href: '/modules/3',
        icon: '💅',
        name: 'User centered design',
        code: 'PC3001',
        color: 'indigo',
        credits: 15,
      },
      {
        href: '/modules/4',
        icon: '📌',
        name: 'Final Year Project',
        code: 'CS3810',
        color: 'amber',
        credits: 15,
      },
      {
        href: '/modules/5',
        icon: '🔐',
        name: 'Malicious Software',
        code: 'IY3840',
        color: 'blue',
        credits: 15,
      },
    ],
  },
  recentNotebooks: {
    isLoading: false,
    data: [
      {
        icon: '📚',
        title: 'Introduction to Computer Algorithms',
        lastEdited: '2 hours ago',
        href: '/notebooks/1',
        label: {
          name: 'Algorithms and Complexity',
          color: 'red',
        },
      },
      {
        icon: '✨',
        title: 'Week 1 - Introduction to IT Project Management',
        lastEdited: '6 hours ago',
        href: '/notebooks/2',
        label: {
          name: 'IT Project Management',
          color: 'green',
        },
      },
      {
        icon: '👩‍🎨',
        title: 'Introduction to User centered design',
        lastEdited: '8 hours ago',
        href: '/notebooks/3',
        label: {
          name: 'User centered design',
          color: 'indigo',
        },
      },
      {
        icon: '📌',
        title: 'Final Project Plan',
        lastEdited: '14 hours ago',
        href: '/notebooks/4',
        label: {
          name: 'Final Year Project',
          color: 'amber',
        },
      },
      {
        icon: '🔐',
        title: 'Encryption and Decryption',
        lastEdited: '23 hours ago',
        href: '/notebooks/5',
        label: {
          name: 'Malicious Software',
          color: 'blue',
        },
      },
    ],
  },
};

const config: Meta<typeof args> = {
  title: "Pages / Today's Activity",
  component: TodaysActivity,
  args,
};

export default config;

const Template: Story<ComponentProps<typeof TodaysActivity>> = (props) => (
  <TodaysActivity {...props} />
);

export const Normal = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  greetingProps: {
    ...args.greetingProps,
    isLoading: true,
  },
  recentModules: {
    ...args.recentModules,
    isLoading: true,
  },
  recentNotebooks: {
    ...args.recentNotebooks,
    isLoading: true,
  },
};
