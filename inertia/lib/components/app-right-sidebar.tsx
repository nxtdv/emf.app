import * as React from 'react'
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
} from '@tabler/icons-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { DualSidebar, DualSidebarContent } from '@/components/ui/dual-sidebar-provider'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard,
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: IconListDetails,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar,
    },
    {
      title: 'Projects',
      url: '#',
      icon: IconFolder,
    },
    {
      title: 'Team',
      url: '#',
      icon: IconUsers,
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
    </DualSidebar>
  )
}
