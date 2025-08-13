import CountriesHelper from '#helpers/countries_service'
import TimezoneHelper from '#helpers/timezones_service'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { ChevronLeft, ChevronRight, ChevronDownIcon, ChevronsUpDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface RegisterFormData {
  nickname: string
  firstName: string
  lastName: string
  email: string
  password: string
  password_confirmation: string
  dateOfBirth: Date | undefined
  country: string
  timezone: string
}

interface RegisterFormProps {
  data: RegisterFormData
  setData: <K extends keyof RegisterFormData>(key: K, value: RegisterFormData[K]) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isSubmitting?: boolean
}

export const RegisterForm = (props: RegisterFormProps) => {
  const { data, setData, onSubmit, isSubmitting = false } = props

  const timezones = TimezoneHelper.getMainTimezones()

  const [currentStep, setCurrentStep] = React.useState(1)
  const [open, setOpen] = React.useState(false)
  const [countryOpen, setCountryOpen] = React.useState(false)
  const [timezoneOpen, setTimezoneOpen] = React.useState(false)

  const totalSteps = 3

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentStep === totalSteps) {
      onSubmit(e)
    } else {
      nextStep()
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="grid gap-3">
              <Label htmlFor="nickname">Username</Label>
              <Input
                id="nickname"
                type="text"
                placeholder="John Doe"
                value={data.nickname}
                onChange={(e) => setData('nickname', e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={data.firstName}
                  onChange={(e) => setData('firstName', e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={data.lastName}
                  onChange={(e) => setData('lastName', e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="date" className="px-1">
                Date of birth
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="w-full" asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal"
                    disabled={isSubmitting} // Désactiver le sélecteur de date
                  >
                    {data.dateOfBirth ? data.dateOfBirth.toLocaleDateString() : 'Select date'}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    selected={data.dateOfBirth}
                    onSelect={(date) => {
                      setData('dateOfBirth', date)
                      setOpen(false)
                    }}
                    disabled={isSubmitting}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </>
        )

      case 2:
        return (
          <>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Minimum 8 characters"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                disabled={isSubmitting}
                minLength={8}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="Repeat your password"
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </>
        )

      case 3:
        return (
          <>
            <div className="grid gap-3">
              <Label htmlFor="country">Country</Label>
              <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={countryOpen}
                    className="w-full justify-between font-normal"
                    disabled={isSubmitting}
                  >
                    {data.country
                      ? (() => {
                          const selectedCountry = Object.entries(
                            CountriesHelper.getCoutriesByContinent()
                          )
                            .flatMap(([_, countries]) => countries)
                            .find((country) => country.code === data.country)
                          return selectedCountry ? (
                            <span className="flex items-center gap-2">
                              <span>{selectedCountry.flag}</span>
                              <span>{selectedCountry.name}</span>
                            </span>
                          ) : (
                            'Select your country'
                          )
                        })()
                      : 'Select your country'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[var(--radix-popover-trigger-width)] p-0"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Search country..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      {Object.entries(CountriesHelper.getCoutriesByContinent()).map(
                        ([continent, countryList]) => (
                          <CommandGroup key={continent}>
                            <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                              {continent}
                            </div>
                            {countryList.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={`${country.name} ${country.code}`} // Permet de chercher par nom ET code
                                onSelect={() => {
                                  setData('country', country.code)
                                  setCountryOpen(false)
                                }}
                              >
                                <span className="flex items-center gap-2 flex-1">
                                  <span>{country.flag}</span>
                                  <span>{country.name}</span>
                                </span>
                                <Check
                                  className={cn(
                                    'ml-auto h-4 w-4',
                                    data.country === country.code ? 'opacity-100' : 'opacity-0'
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        )
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="timezone">Timezone</Label>
              <Popover open={timezoneOpen} onOpenChange={setTimezoneOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={timezoneOpen}
                    className="w-full justify-between font-normal"
                    disabled={isSubmitting}
                  >
                    {data.timezone
                      ? (() => {
                          const selectedTimezone = timezones.find((tz) => tz.zone === data.timezone)
                          return selectedTimezone
                            ? `${selectedTimezone.name} (${selectedTimezone.offsetString})`
                            : 'Select your timezone'
                        })()
                      : 'Select your timezone'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[var(--radix-popover-trigger-width)] p-0"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Search timezone..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No timezone found.</CommandEmpty>
                      <CommandGroup>
                        {timezones.map((tz) => (
                          <CommandItem
                            key={tz.zone}
                            value={`${tz.name} ${tz.zone} ${tz.offsetString}`}
                            onSelect={() => {
                              setData('timezone', tz.zone)
                              setTimezoneOpen(false)
                            }}
                          >
                            <span className="flex-1">
                              {tz.name} ({tz.offsetString})
                            </span>
                            <Check
                              className={cn(
                                'ml-auto h-4 w-4',
                                data.timezone === tz.zone ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-6')}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="relative">
              <img src="/images/MxGR_Black.png" alt="Logo" className="h-10 w-auto dark:hidden" />
              <img
                src="/images/MxGR_White.png"
                alt="Logo"
                className="h-10 w-auto hidden dark:block"
              />
            </div>
          </a>
          <div className="text-center text-sm">
            Already have an account?{' '}
            <a href="#" className="underline underline-offset-4">
              Sign in
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {renderStepContent()}

          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex-1"
                disabled={isSubmitting}
              >
                <ChevronLeft className="size-4 mr-2" />
                Previous
              </Button>
            )}
            <Button
              type="submit"
              className={cn('flex-1', currentStep === 1 && 'w-full')}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {currentStep === totalSteps ? 'Creating Account...' : 'Processing...'}
                </>
              ) : currentStep === totalSteps ? (
                'Create Account'
              ) : (
                <>
                  Next
                  <ChevronRight className="size-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">Or</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button
            variant="outline"
            type="button"
            className="w-full"
            disabled={isSubmitting} // Désactiver les boutons OAuth
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
            Continue with Apple
          </Button>
          <Button variant="outline" type="button" className="w-full" disabled={isSubmitting}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>
        </div>
      </div>

      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our{' '}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </form>
  )
}
