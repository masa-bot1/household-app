import React from 'react'
import { Box, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ja } from 'date-fns/locale';
import { addMonths, set } from 'date-fns';

interface MonthSelectorProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const MonthSelector = ({ currentMonth, setCurrentMonth }: MonthSelectorProps) => {

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      setCurrentMonth(newDate);
    }
  }

  // 先月ボタンを押した時の処理
  const handlePreviousMonth = () => {
    const previousMonth = addMonths(currentMonth, -1);
    setCurrentMonth(previousMonth);
  }

  // 次月ボタンを押した時の処理
  const handleNextMonth = () => {
    const nextMonth = addMonths(currentMonth, 1);
    setCurrentMonth(nextMonth);
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ja}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button onClick={handlePreviousMonth} color={"error"} variant='contained'>
          先月
        </Button>
        <DatePicker
          onChange={handleDateChange}
          value={currentMonth}
          label="年月を選択"
          sx={{ mx: 2, background: "white" }}
          views={["year", "month"]}
          format='yyyy/MM'
          slotProps={{
            calendarHeader: { format: 'yyyy年 MM月' },
            toolbar: {
              toolbarFormat: 'yyyy年MM月',
            }
          }}
        />
        <Button onClick={handleNextMonth} color={"primary"} variant='contained'>
          次月
        </Button>
      </Box>
    </LocalizationProvider>
  )
}

export default MonthSelector
