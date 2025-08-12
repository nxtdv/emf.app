'use client'

import * as React from 'react'
import { type Icon } from '@tabler/icons-react'

import {
  DualSidebarGroup,
  DualSidebarContent,
  DualSidebarMenu,
  DualSidebarMenuButton,
  DualSidebarMenuItem,
} from '@/components/ui/dual-sidebar-provider'

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof DualSidebarGroup>) {
  return (
    <DualSidebarGroup {...props}>
      <DualSidebarContent>
        <DualSidebarMenu>
          {items.map((item) => (
            <DualSidebarMenuItem key={item.title}>
              <DualSidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </DualSidebarMenuButton>
            </DualSidebarMenuItem>
          ))}
        </DualSidebarMenu>
      </DualSidebarContent>
    </DualSidebarGroup>
  )
}
