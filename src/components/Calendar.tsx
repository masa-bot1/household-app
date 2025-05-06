import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'
import "../calendar.css"
import { EventContentArg } from '@fullcalendar/core'
import { Transaction } from '../types'
import { calculateDailyBalances } from '../utils/financeCalculations'

interface CalendarProps {
  monthlyTransactions: Transaction[]
}

const Calendar = ({monthlyTransactions}: CalendarProps) => {
  const events = [
    { title: 'Meeting', start: new Date() },
    { title: 'asd', start: "2025-05-01", income: 300, expense: 200, balance: 100 }
  ]

  const renderEventContent = (eventInfo: EventContentArg) => {
    console.log(eventInfo);
    return (
      <div>
        <div className='money'id='event-income'>
          {eventInfo.event.extendedProps.income}
        </div>

        <div className='money'id='event-expense'>
          {eventInfo.event.extendedProps.expense}
        </div>

        <div className='money'id='event-balance'>
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  console.log(dailyBalances);

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
    />
  )
}

export default Calendar
