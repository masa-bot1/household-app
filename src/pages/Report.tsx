import { Grid, Paper } from '@mui/material'
import React from 'react'

const Report = () => {
  const commonPaperStyle = {
    height: { xs: "auto", md: "400px" },
  }
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        日付
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Paper sx={commonPaperStyle}>カテゴリグラフ</Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Paper sx={commonPaperStyle}>棒グラフ</Paper>
      </Grid>
      <Grid size={{ xs: 12 }}>
        テーブル
      </Grid>
    </Grid>
  )
}

export default Report
