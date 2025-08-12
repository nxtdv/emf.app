import { IconCirclePlusFilled, IconMail, type Icon } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
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
    <DualSidebarGroup>
      <DualSidebarGroupContent className="flex flex-col gap-2">
        <DualSidebarMenu>
          <DualSidebarMenuItem className="flex items-center gap-2">
            <DualSidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </DualSidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </DualSidebarMenuItem>
        </DualSidebarMenu>
        <DualSidebarMenu>
          {items.map((item) => (
            <DualSidebarMenuItem key={item.title}>
              <DualSidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </DualSidebarMenuButton>
            </DualSidebarMenuItem>
          ))}
        </DualSidebarMenu>
      </DualSidebarGroupContent>
    </DualSidebarGroup>
  )
}
