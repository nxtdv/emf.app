type Timezone =
  | 'Etc/GMT+12'
  | 'Pacific/Midway'
  | 'Pacific/Honolulu'
  | 'America/Anchorage'
  | 'America/Los_Angeles'
  | 'America/Denver'
  | 'America/Chicago'
  | 'America/New_York'
  | 'America/Caracas'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Europe/London'
  | 'Europe/Paris'
  | 'Europe/Athens'
  | 'Europe/Moscow'
  | 'Asia/Dubai'
  | 'Asia/Karachi'
  | 'Asia/Dhaka'
  | 'Asia/Bangkok'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Australia/Sydney'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'

interface TimezoneInfo {
  zone: Timezone
  name: string
  offsetMinutes: number
  offsetHours: number
  offsetString: string
  localTime: string
  isDST: boolean
}

export default class TimezoneHelper {
  private static readonly MAIN_TIMEZONES: readonly Timezone[] = [
    'Etc/GMT+12', // UTC-12
    'Pacific/Midway', // UTC-11
    'Pacific/Honolulu', // UTC-10
    'America/Anchorage', // UTC-9
    'America/Los_Angeles', // UTC-8
    'America/Denver', // UTC-7
    'America/Chicago', // UTC-6
    'America/New_York', // UTC-5
    'America/Caracas', // UTC-4
    'America/Sao_Paulo', // UTC-3
    'Atlantic/South_Georgia', // UTC-2
    'Atlantic/Azores', // UTC-1
    'Europe/London', // UTC+0
    'Europe/Paris', // UTC+1
    'Europe/Athens', // UTC+2
    'Europe/Moscow', // UTC+3
    'Asia/Dubai', // UTC+4
    'Asia/Karachi', // UTC+5
    'Asia/Dhaka', // UTC+6
    'Asia/Bangkok', // UTC+7
    'Asia/Singapore', // UTC+8
    'Asia/Tokyo', // UTC+9
    'Australia/Sydney', // UTC+10
    'Pacific/Noumea', // UTC+11
    'Pacific/Auckland', // UTC+12
  ] as const

  static getMainTimezones(referenceDate: Date = new Date()): TimezoneInfo[] {
    return this.MAIN_TIMEZONES.map((zone): TimezoneInfo => {
      const offsetMinutes = this.getTimezoneOffsetForZone(referenceDate, zone)
      const offsetHours = offsetMinutes / 60

      return {
        zone,
        name: this.extractTimezoneName(zone),
        offsetMinutes,
        offsetHours,
        offsetString: this.formatOffset(offsetMinutes),
        localTime: referenceDate.toLocaleString('fr-FR', {
          timeZone: zone,
          hour: '2-digit',
          minute: '2-digit',
        }),
        isDST: this.isDaylightSaving(zone, referenceDate),
      }
    }).sort((a, b) => a.offsetHours - b.offsetHours)
  }

  private static extractTimezoneName(zone: Timezone): string {
    const parts = zone.split('/')
    const lastPart = parts[parts.length - 1]
    return lastPart ? lastPart.replace(/_/g, ' ') : zone
  }

  static getTimezoneOffsetForZone(date: Date, timeZone: Timezone): number {
    const localDate = new Date(date.toLocaleString('sv-SE', { timeZone }))
    const utcDate = new Date(date.toLocaleString('sv-SE', { timeZone: 'UTC' }))
    return Math.round((localDate.getTime() - utcDate.getTime()) / (1000 * 60))
  }

  static formatOffset(offsetMinutes: number): string {
    const hours = Math.floor(Math.abs(offsetMinutes) / 60)
    const minutes = Math.abs(offsetMinutes) % 60
    const sign = offsetMinutes >= 0 ? '+' : '-'

    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  static isDaylightSaving(timeZone: Timezone, date: Date = new Date()): boolean {
    const january = new Date(date.getFullYear(), 0, 1)
    const july = new Date(date.getFullYear(), 6, 1)

    const janOffset = this.getTimezoneOffsetForZone(january, timeZone)
    const julOffset = this.getTimezoneOffsetForZone(july, timeZone)
    const currentOffset = this.getTimezoneOffsetForZone(date, timeZone)

    const dstOffset = Math.max(janOffset, julOffset)
    return currentOffset === dstOffset && janOffset !== julOffset
  }
}
