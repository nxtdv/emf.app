import { IconCirclePlusFilled, type Icon, IconUsersGroup } from '@tabler/icons-react'

import {
  DualSidebarGroup,
  DualSidebarGroupContent,
  DualSidebarMenu,
  DualSidebarMenuButton,
  DualSidebarMenuItem,
} from '@/components/ui/dual-sidebar-provider'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <DualSidebarGroup className="group-data-[collapsible=icon]:p-0 p-2">
      <DualSidebarGroupContent className="flex flex-col gap-2">
        <DualSidebarMenu className="p-0 group-data-[collapsible=icon]:p-2">
          {items.map((item) => (
            <DualSidebarMenuItem key={item.title}>
              <DualSidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </DualSidebarMenuButton>
            </DualSidebarMenuItem>
          ))}
        </DualSidebarMenu>

        <DualSidebarMenu className="bg-secondary text-secondary-foreground rounded-lg p-2 group-data-[collapsible=icon]:p-2">
          <DualSidebarMenuItem className="flex items-center gap-2">
            <DualSidebarMenuButton
              tooltip="Create Party"
              className="active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconUsersGroup />
              <span>Create Party</span>
            </DualSidebarMenuButton>
          </DualSidebarMenuItem>
          <DualSidebarMenuItem className="flex items-center gap-2">
            <DualSidebarMenuButton
              tooltip="Invite Party"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Invite Party</span>
            </DualSidebarMenuButton>
          </DualSidebarMenuItem>
        </DualSidebarMenu>
      </DualSidebarGroupContent>
    </DualSidebarGroup>
  )
}
