'use client'

import { IconDots, IconFolder, IconShare3, IconTrash, type Icon } from '@tabler/icons-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  DualSidebarGroup,
  DualSidebarGroupLabel,
  DualSidebarMenuAction,
  DualSidebarMenu,
  DualSidebarMenuButton,
  DualSidebarMenuItem,
  useDualSidebar,
} from '@/components/ui/dual-sidebar-provider'

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useDualSidebar()

  return (
    <DualSidebarGroup className="group-data-[collapsible=icon]:hidden">
      <DualSidebarGroupLabel>Documents</DualSidebarGroupLabel>
      <DualSidebarMenu>
        {items.map((item) => (
          <DualSidebarMenuItem key={item.name}>
            <DualSidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </DualSidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <DualSidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconDots />
                  <span className="sr-only">More</span>
                </DualSidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DualSidebarMenuItem>
        ))}
        <DualSidebarMenuItem>
          <DualSidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </DualSidebarMenuButton>
        </DualSidebarMenuItem>
      </DualSidebarMenu>
    </DualSidebarGroup>
  )
}
