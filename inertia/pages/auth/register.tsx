import CountriesHelper from '#helpers/countries_service'
import { RegisterForm } from '@/components/register-form'
import { useForm } from '@inertiajs/react'
import { DateTime } from 'luxon'
import React from 'react'
import { toast } from 'sonner'

export default function RegisterPage() {
  const getUserTimezone = DateTime.local().zoneName
  const getUserCountry = CountriesHelper.detectUserCountry()

  const form = useForm({
    nickname: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
    dateOfBirth: undefined,
    country: getUserCountry,
    timezone: getUserTimezone,
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    form.post('/register', {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Event created successfully!')
        form.reset()
      },
      onError: () => {
        toast.error('An error occurred while creating the event.')
      },
    })
  }

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm
          data={form.data}
          setData={form.setData}
          onSubmit={onSubmit}
          isSubmitting={form.processing}
        />
      </div>
    </div>
  )
}
