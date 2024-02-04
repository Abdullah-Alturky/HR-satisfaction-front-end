/* eslint-disable no-unused-vars */
import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Chart from "../layouts/Dashboard/Chart/Chart";
import LineChart from "../layouts/Dashboard/LineChart/LineChart";
import BasePage from "./BasePage";
import { WalletCard } from "../components/Cards/Cards";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useFetchFunction from "../hooks/useFetchFunction";
import { useEffect } from "react";
import {
  getTimeSpendStatistics,
  getUserSalariesStatistics,
  getUserStatistics,
} from "../services/chart";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
const StyledCenterBox = styled(Box)(() => ({
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
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px ",
  height: "100%",
}));
const CardsContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "1rem",
}));
const Overview = () => {
  const [
    statisticsResponse,
    statisticsError,
    statisticsLoading,
    statisticsFetch,
  ] = useFetchFunction();
  const [salaryResponse, salaryError, salaryLoading, salaryFetch] =
    useFetchFunction();
  const [avgTimeResponse, avgTimeError, avgTimeLoading, avgTimeFetch] =
    useFetchFunction();

  useEffect(() => {
    getUserStatistics(statisticsFetch);
    getTimeSpendStatistics(avgTimeFetch);
    getUserSalariesStatistics(salaryFetch);
  }, []);
  return (
    <BasePage title={"Overview"}>
      {statisticsLoading && (
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
      {statisticsResponse &&
        statisticsResponse.average_employees_satisfaction && (
          <CardsContainer>
            <WalletCard
              sub={"Average Employees Satisfaction"}
              text={statisticsResponse?.average_employees_satisfaction.toFixed(
                1
              )}
              icon={
                <PeopleAltIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              }
            />
            <WalletCard
              sub={"Average Years In Company"}
              text={statisticsResponse?.average_years_in_company.toFixed(1)}
              icon={
                <SentimentSatisfiedAltIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              }
            />
            <WalletCard
              sub={"Total Employees"}
              text={parseInt(statisticsResponse?.total_employees.toFixed(3))}
              icon={
                <QueryStatsIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              }
            />
            <WalletCard
              sub={"Females"}
              text={
                (
                  (
                    statisticsResponse?.females /
                    statisticsResponse?.total_employees
                  ).toFixed(3) * 100
                ).toString() + "%"
              }
              icon={
                <FavoriteIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              }
            />
            <WalletCard
              sub={"Males"}
              text={
                (
                  (
                    statisticsResponse?.males /
                    statisticsResponse?.total_employees
                  ).toFixed(3) * 100
                ).toString() + "%"
              }
              icon={
                <FavoriteIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              }
            />
          </CardsContainer>
        )}
      <StyledCard
        elevation={7}
        sx={{
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          Average Employees Salary
        </Typography>
        <StyledCenterBox>
          {salaryLoading && (
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
          {salaryResponse && !salaryLoading && (
            <LineChart dataSet={salaryResponse} />
          )}
        </StyledCenterBox>
      </StyledCard>
      <StyledCard
        elevation={7}
        props={{
          sx: {
            width: "100%",
            marginBottom: "1rem",
          },
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          Years Of Service
        </Typography>
        <StyledCenterBox>
          {avgTimeLoading && (
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
          {avgTimeResponse && !avgTimeLoading && (
            <Chart dataSet={avgTimeResponse} />
          )}
        </StyledCenterBox>
      </StyledCard>
    </BasePage>
  );
};

export default Overview;
