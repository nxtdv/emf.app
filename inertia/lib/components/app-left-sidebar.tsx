import { NavFooter } from '@/components/nav-footer'
import { NavPrimary } from '@/components/nav-primary'
import { Separator } from '@/components/ui/separator'
import * as React from 'react'
import {
  IconCamera,
  IconChartBar,
  IconCrosshair,
  IconDashboard,
  IconListDetails,
  IconPlayerPlay,
  IconShoppingBag,
  IconSparkles,
} from '@tabler/icons-react'

import { NavSecondary } from '@/components/nav-secondary'
import {
  DualSidebar,
  DualSidebarContent,
  DualSidebarFooter,
  DualSidebarHeader,
  DualSidebarMenu,
  DualSidebarMenuButton,
  DualSidebarMenuItem,
} from '@/components/ui/dual-sidebar-provider'

const data = {
  navMain: [
    {
      title: 'Party Finder',
      url: '#',
      icon: IconDashboard,
    },
    {
      title: 'Play',
      url: '#',
      icon: IconPlayerPlay,
    },
    {
      title: 'Rank',
      url: '#',
      icon: IconChartBar,
    },
    {
      title: 'Watch',
      url: '#',
      icon: IconCamera,
    },
    {
      title: 'Feed',
      url: '#',
      icon: IconListDetails,
    },
  ],
  navSecondary: [
    {
      title: 'Clubs',
      url: '#',
      icon: IconDashboard,
    },
  ],
  navFooter: [
    {
      title: 'Missions',
      url: '#',
      icon: IconCrosshair,
    },
    {
      title: 'Shop',
      url: '#',
      icon: IconShoppingBag,
    },
    {
      title: 'Upgrade',
      url: '#',
      icon: IconSparkles,
    },
  ],
}

export function AppLeftSidebar({ ...props }: React.ComponentProps<typeof DualSidebar>) {
  return (
    <DualSidebar {...props}>
      <DualSidebarHeader>
        <DualSidebarMenu>
          <DualSidebarMenuItem>
            <DualSidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#" className="flex items-center gap-2">
                <div className="relative">
                  <img src="/images/MxGR_Black.png" alt="Logo" className="h-6 w-auto dark:hidden" />
                  <img
                    src="/images/MxGR_White.png"
                    alt="Logo"
                    className="h-6 w-auto hidden dark:block"
                  />
                </div>
              </a>
            </DualSidebarMenuButton>
          </DualSidebarMenuItem>
        </DualSidebarMenu>
      </DualSidebarHeader>
      <DualSidebarContent>
        <NavPrimary items={data.navMain} />
        <Separator className="my-2" />
        <NavSecondary items={data.navSecondary} />
      </DualSidebarContent>
      <DualSidebarFooter>
        <NavFooter items={data.navFooter} />
      </DualSidebarFooter>
    </DualSidebar>
  )
}
