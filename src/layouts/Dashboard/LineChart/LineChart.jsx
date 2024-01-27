/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  LineChart as LineChartJS,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

const LineChart = ({ dataSet }) => {
  console.log("dataSet = ", dataSet);
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
  return (
    <ChartContainer>
      <CustomTablePagination
        rowsPerPageOptions={[4, 10, 25, dataSet.length]}
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
      <ResponsiveContainer width="100%" height="100%" minHeight={"40vh"}>
        <LineChartJS
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
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="average_salary"
            stroke={theme.palette.primary.main}
            activeDot={{ r: 8 }}
          />
        </LineChartJS>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default React.memo(LineChart);
