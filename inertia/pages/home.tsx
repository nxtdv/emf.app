import { AppRightSidebar } from '@/components/app-right-sidebar'
import { AppLeftSidebar } from '@/components/app-left-sidebar'
import { SiteHeader } from '@/components/site-header'
import { DualSidebarInset, DualSidebarProvider } from '@/components/ui/dual-sidebar-provider'
import React from 'react'

export default function Home() {
  return (
    <DualSidebarProvider
      defaultLeftOpen={true}
      defaultRightOpen={false}
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppLeftSidebar side="left" variant="inset" collapsible="offcanvas" />
      <DualSidebarInset>
        <SiteHeader title="Homepage" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2"></div>
        </div>
      </DualSidebarInset>
      <AppRightSidebar side="right" variant="inset" collapsible="icon" />
    </DualSidebarProvider>
  )
}
