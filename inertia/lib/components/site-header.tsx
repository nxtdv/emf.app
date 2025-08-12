import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { DualSidebarTrigger } from '@/components/ui/dual-sidebar-provider'

interface SiteHeaderProps {
  title?: string
}

export function SiteHeader({ title = 'Documents' }: SiteHeaderProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-2 md:hidden">
          <DualSidebarTrigger side="left" className="-ml-1" />
          <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
        </div>

        <h1 className="text-base font-medium">{title}</h1>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/nxtdv/emf.app"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>

          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
          <DualSidebarTrigger side="right" className="-mr-1" />
        </div>
      </div>
    </header>
  )
}
