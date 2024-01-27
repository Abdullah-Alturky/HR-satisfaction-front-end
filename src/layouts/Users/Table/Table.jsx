import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Chip,
  CircularProgress,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  tableCellClasses,
} from "@mui/material";

import { CustomTablePagination } from "../../Dashboard/CustomTablePagination";
import styled from "@emotion/styled";
import { StyledTable } from "./Table.styled";
import { useNavigate } from "react-router-dom";
import useFetchFunction from "../../../hooks/useFetchFunction";
import { getUsers } from "../../../services/getUsers";
const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));
const StyledCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SuccessChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
}));
const ErrorChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
}));
const NormalChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.common.black,
}));

const rows = [
  {
    id: 1,
    Name: "John Doe",
    Email: "Johndoegmail.com",
    Phone: "1234567890",
    City: "New York",
    Department: "IT",
    Status: <SuccessChip label="satisfied" />,
    Action: "Show",
  },
  {
    id: 2,
    Name: "John Doe",
    Email: "Johndoegmail.com",
    Phone: "1234567890",
    City: "New York",
    Department: "IT",
    Status: <ErrorChip label="unsatisfied" />,
    Action: "Show",
  },
  {
    id: 3,
    Name: "John Doe",
    Email: "Johndoegmail.com",
    Phone: "1234567890",
    City: "New York",
    Department: "IT",
    Status: <NormalChip label="normal" />,
    Action: "Show",
  },
  {
    id: 4,
    Name: "John Doe",
    Email: "Johndoegmail.com",
    Phone: "1234567890",
    City: "New York",
    Department: "IT",
    Status: <NormalChip label="normal" />,
    Action: "Show",
  },
  {
    id: 5,
    Name: "John Doe",
    Email: "Johndoegmail.com",
    Phone: "1234567890",
    City: "New York",
    Department: "IT",
    Status: <NormalChip label="normal" />,
    Action: "Show",
  },
];

export default function Table() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [response, error, isLoading, fetchData] = useFetchFunction();
  console.log("response = ", response);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    getUsers(fetchData, {
      page: page + 1,
      limit: rowsPerPage,
      query: search,
    });
  };
  React.useEffect(() => {
    getUsers(fetchData, {
      page: page + 1,
      limit: rowsPerPage,
      query: search,
    });
  }, [page, rowsPerPage]);
  return (
    <StyledCard
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {response && response.users && response.users.length > 0 && (
        <>
          <CustomTablePagination
            rowsPerPageOptions={[4, 10, 25, response.users.length]}
            count={response.meta.limit * response.meta.pages_count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="No."
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} of ${count}`
            }
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
          <TableContainer
            sx={{
              boxShadow: "none",
            }}
            component={Paper}
          >
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Department</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                  <StyledTableCell align="right">Salary</StyledTableCell>
                  <StyledTableCell align="right">
                    Gender
                  </StyledTableCell>
                  <StyledTableCell align="right">Satisfaction</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {response.users.map((stock) => (
                  <StyledTableRow key={stock._id}>
                    <StyledTableCell component="th" scope="row">
                      {stock.Name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stock.Department}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stock.Role}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stock.salary}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stock.Gender}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stock.is_satisfied ? (
                        <SuccessChip label="satisfied" />
                      ) : (
                        <ErrorChip label="unsatisfied" />
                      )}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <Button
                        onClick={() => navigate(`/user-info/${stock._id}`)}
                        variant="contained"
                      >
                        Show
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </>
      )}
    </StyledCard>
  );
}
