'use client'

import { Button } from '@/components/ui/button'
import * as React from 'react'
import { type Icon, IconSearch } from '@tabler/icons-react'

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
      <DualSidebarContent className="flex flex-col gap-2">
        <DualSidebarMenu>
          <DualSidebarMenuItem className="flex items-center gap-2">
            <DualSidebarMenuButton
              tooltip="Search"
              className="text-muted-foreground border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            >
              <IconSearch />
              <span>Search</span>
            </DualSidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <kbd className="text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </DualSidebarMenuItem>
        </DualSidebarMenu>
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
