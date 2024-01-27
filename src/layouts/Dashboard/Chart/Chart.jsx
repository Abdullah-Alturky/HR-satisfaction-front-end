import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as BarChartJS,
  Bar,
  Cell,
} from "recharts";
import { Box, styled, useTheme } from "@mui/material";
import { CustomTablePagination } from "../CustomTablePagination";
const ChartContainer = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  marginTop: "1rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const colors = [
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
  "#95A4FC",
];

const BarChart = ({ dataSet }) => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(dataSet);
  for (let i = 0; i < dataSet.length; i++) {
    dataSet[i].number_of_employees = Math.round(
      dataSet[i].average_time_spend / 60
    );
  }
  return (
    <ChartContainer>
      <CustomTablePagination
        rowsPerPageOptions={[12, 2, 4, 6]}
        count={dataSet.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="No."
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
      />
      <ResponsiveContainer
        width="99%"
        aspect={3}
        height="100%"
        minHeight={"40vh"}
      >
        <BarChartJS
          data={dataSet.slice(
            page * rowsPerPage,
            Math.min(page * rowsPerPage + rowsPerPage, dataSet.length)
          )}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="_id"
            stroke={
              theme.palette.mode === "dark"
                ? theme.palette.grey[400]
                : theme.palette.common.black
            }
          />
          <YAxis
            stroke={
              theme.palette.mode === "dark"
                ? theme.palette.grey[400]
                : theme.palette.common.black
            }
          />
          <Tooltip
            cursor={{
              fill: theme.palette.mode === "dark" ? "#424242" : "#c3c3c3",
            }}
          />
          <Bar dataKey="number_of_employees" fill="#8884d8" />
        </BarChartJS>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default React.memo(BarChart);
