import { Separator } from '@/components/ui/separator'
import { DualSidebarTrigger } from '@/components/ui/dual-sidebar-provider'

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <DualSidebarTrigger side="left" className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />

        <div className="ml-auto flex items-center gap-2">
          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
          <DualSidebarTrigger side="right" className="-mr-1" />
        </div>
      </div>
    </header>
  )
}
