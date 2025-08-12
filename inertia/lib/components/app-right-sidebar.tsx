import * as React from 'react'
import { IconUsers, IconTournament, IconMessage, IconBell } from '@tabler/icons-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  DualSidebar,
  DualSidebarContent,
  DualSidebarRail,
} from '@/components/ui/dual-sidebar-provider'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Matches',
      url: '#',
      icon: IconTournament,
    },
    {
      title: 'Notifications',
      url: '#',
      icon: IconBell,
    },
    {
      title: 'Friends',
      url: '#',
      icon: IconUsers,
    },
    {
      title: 'Messages',
      url: '#',
      icon: IconMessage,
    },
  ],
}

export function AppRightSidebar({ ...props }: React.ComponentProps<typeof DualSidebar>) {
  return (
    <DualSidebar {...props}>
      <DualSidebarContent>
        <NavUser user={data.user} />
        <NavMain items={data.navMain} />
      </DualSidebarContent>
      <DualSidebarRail side="right" />
    </DualSidebar>
  )
}
