import InfoCardContainer from "../components/InfoCardContainer/InfoCardContainer";
import BasePage from "./BasePage";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {
  Avatar,
  Box,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import wallet from "../assets/images/wallet.png";
import PersonIcon from "@mui/icons-material/Person";
import WcIcon from "@mui/icons-material/Wc";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QuizIcon from "@mui/icons-material/Quiz";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import StarIcon from "@mui/icons-material/Star";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { useEffect, useState } from "react";
import useFetchFunction from "../hooks/useFetchFunction";
import { useParams } from "react-router";
import { getUser } from "../services/getUsers";
import { WalletCard } from "../components/Cards/Cards";

const infoList = [
  {
    info: "Name",
    label:"Name",
    value: "Ahmed",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Gender",
    label:"Gender",
    value: "1000",
    icon: (
      <WcIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Department",
    label: "Department",
    value: "Software",
    icon: (
      <BusinessIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "GEO",
    label: "GEO",
    value: "Software",
    icon: (
      <PublicIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Role",
    label: "Role",
    value: "Software",
    icon: (
      <MonetizationOnIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "salary",
    label:"Salary",
    value: "Software",
    icon: (
      <MonetizationOnIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "last_evaluation",
    label: "Last Evaluation Score",
    value: "Software",
    icon: (
      <QuizIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  // {
  //   info: "number_project",
  //   value: "Software",
  //   icon: (
  //     <QueryStatsIcon
  //       sx={{
  //         fontSize: "3rem",
  //       }}
  //     />
  //   ),
  // },
  // {
  //   info: "average_montly_hours",
  //   value: "Software",
  //   icon: (
  //     <WatchLaterIcon
  //       sx={{
  //         fontSize: "3rem",
  //       }}
  //     />
  //   ),
  // },
  {
    info: "Talent_Level",
    label: "Talent Level of the Employee",
    // label: "scale of the employee Talent ",
    value: "Software",
    icon: (
      <LocalAirportIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "promotion_last_5years",
    label: "Promotion Last 5 Years",
    value: "Software",
    icon: (
      <UpgradeIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Rising_Star",
    label: "Promote-ability Level",
    value: "Software",
    icon: (
      <StarIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  // {
  //   info: "Emp_Satisfaction",
  //   value: "Software",
  //   icon: (
  //     <SentimentSatisfiedIcon
  //       sx={{
  //         fontSize: "3rem",
  //       }}
  //     />
  //   ),
  // },
  {
    info: "EMP_Sat_OnPrem_1",
    label: "Office Satisfaction ",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "EMP_Sat_Remote_1",
    label: "Remote Work Satisfaction",

    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Collaborative_1",
    label: "Competitive Work Perception",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "time_spend_company",
    label: "Years of service",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "EMP_Engagement_1",
    label: "Engagement Level",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Work_Status2",
    label: "Work Status View ",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Identity",
    label: "Employee identify in company",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Role",
    label: "Employee perceive in the Role",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Position",
    label: "Employee perceive in the Position",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  // {
  //   info: "Will_Relocate",
  //   value: "Software",
  //   icon: (
  //     <PersonIcon
  //       sx={{
  //         fontSize: "3rem",
  //       }}
  //     />
  //   ),
  // },
  
  {
    info: "Critical",
    label: "Employee Critical Level",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Trending_Perf",
    info2: "Trending Perf",
    label: "Employee performance",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Percent_Remote",
    label: "Remote Work Percentage",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "left_Company",
    label: "Left the Company",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
  {
    info: "Emp_Competitive_1",
    label: "Work Competitiveness",
    value: "Software",
    icon: (
      <PersonIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    ),
  },
];

function UserInfo() {
  const { id } = useParams();
  const [response, error, isLoading, fetchData] = useFetchFunction();
  const [name, setName] = useState("");
  useEffect(() => {
    getUser(fetchData, id);
  }, []);
  useEffect(() => {
    if (response && response.user) {
      for (let element in infoList) {
        // check if the property/key is defined in the response.user
        if (response.user[infoList[element].info] !== undefined) {

          // use the key to get the corresponding value from the object
          infoList[element].value = response.user[infoList[element].info];
        }
        if (infoList[element].info2 !==undefined && response.user[infoList[element].info2] !== undefined) {
          
          // use the key to get the corresponding value from the object
          infoList[element].value = response.user[infoList[element].info2];
        }
      }
      if (response.user.Name) {
        setName(response.user.Name);
      }
    }
  }, [response]);
  const theme = useTheme();
  console.log("response = ", response);
  return (
    <BasePage
      title={"Employee Information"}
      subtitle={`The employee's current status, salary, and other information will be displayed here.`}
    >
      <div
        style={{
          marginTop: "1rem",
          padding: "0.5rem",
          borderRadius: "8px",
          display: "flex",
          width: "100%",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: "#B4D4FF",
        }}
      >
       {response && response.user && response.user.is_satisfied === 1 && (
            <SentimentSatisfiedAltIcon  sx={{
              fontSize: "3rem"  , color:"black",
            }}/>
          )}
          {response && response.user && response.user.is_satisfied === 0 && (
            <SentimentVeryDissatisfiedIcon
              sx={{
                fontSize: "3rem" , color:"black",
              }}
            />
          )}
        <Typography
          variant="h4"
          sx={{
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.common.white,
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
          {response && response.user && name}
          
        </Typography>
      </div>
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
      {response && response.user && response.user.recommendation && (
        <Box
          sx={{
            marginTop: "1rem",
          }}
        >
          <WalletCard
            text={response.user.recommendation}
            sub={"Recommendation"}
          />
        </Box>
      )}
      {response && response.user && <InfoCardContainer infoList={infoList} />}
    </BasePage>
  );
}

export default UserInfo;
