/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, Fragment, useEffect } from "react";
import { Container } from "./MyStepper.styled";
import EmpInfo from "../EmpInfo/EmpInfo";
import EmpPer from "../EmpPer/EmpPer";
import EmpSat from "../EmpSat/EmpSat";
import EmpDetails from "../EmpDetails/EmpDetails";
import Other from "../Other/Other";

import { useNavigate } from "react-router-dom";
import useFetchFunction from "../../../hooks/useFetchFunction";
import { addUser, userRecommend } from "../../../services/addUser";
import KeepMountedModal from "../../RecommendModal/RecommendModal";
import Recommend from "../Recommend/Recommend";
import { CircularProgress } from "@mui/material";

import toast from "react-hot-toast";

const steps = [
  "General Information",
  "Performance",
  "Employee Satisfaction",
  "Employment Details",
  "Other",
  "Result",
];

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [geo, setGeo] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [title, setTitle] = useState("");

  const [lastEval, setLastEval] = useState("");
  const [numberProject, setNumberProject] = useState("");
  const [averageMonthly, setAverageMonthly] = useState("");
  const [talentLevel, setTalentLevel] = useState("");
  const [pormotion, setPormotion] = useState("");
  const [risingStar, setRisingStar] = useState("");

  const [empSat, setEmpSat] = useState("");
  const [empSatPrem1, setEmpSatPrem1] = useState("");
  const [empSatRemote1, setEmpSatRemote1] = useState("");
  const [empCol1, setEmpCol1] = useState("");

  const [timeSpend, setTimeSpend] = useState("");
  const [empEng, setEmpEng] = useState("");
  const [empWorkStatus2, setEmpWorkStatus2] = useState("");
  const [empIdentity, setEmpIdentity] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [empPosition, setEmpPosition] = useState("");

  const [willRelocate, setWillRelocate] = useState("");
  const [critical, setCritical] = useState("");
  const [trendingPref, setTrendingPref] = useState("");
  const [percentRemote, setPercentRemote] = useState("");
  const [leftCompany, setLeftCompany] = useState("");
  const [empComp, setEmpComp] = useState("");

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const [data2, error2, isLoading2, dataFetch2] = useFetchFunction();

  const [open, setOpen] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  /////////////////////////////////////////////////////////

  const setAllValuesToOne = () => {
    setName("mohamed");
    setDep("IT");
    setGeo("UK");
    setRole("VP");
    setGender("M");
    setSalary("low");
    setTitle("1");
    setLastEval("1");
    setNumberProject("1");
    setAverageMonthly("1");
    setTalentLevel("1");
    setPormotion("1");
    setRisingStar("1");
    setEmpSat("1");
    setEmpSatPrem1("1");
    setEmpSatRemote1("1");
    setEmpCol1("1");
    setTimeSpend("1");
    setEmpEng("1");
    setEmpWorkStatus2("1");
    setEmpIdentity("1");
    setEmpRole("1");
    setEmpPosition("1");
    setWillRelocate("1");
    setCritical("1");
    setTrendingPref("1");
    setPercentRemote("1");
    setLeftCompany("1");
    setEmpComp("1");
  };

  /////////////////////////////////////////////////////////

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleSubmit = () => {
    // Check if any field from name to empComp is empty or undefined
    if (
      name === "" ||
      name === undefined ||
      dep === "" ||
      dep === undefined ||
      geo === "" ||
      geo === undefined ||
      role === "" ||
      role === undefined ||
      gender === "" ||
      gender === undefined ||
      salary === "" ||
      salary === undefined ||
      title === "" ||
      title === undefined ||
      lastEval === "" ||
      lastEval === undefined ||
      // numberProject === "" ||
      // numberProject === undefined ||
      // averageMonthly === "" ||
      // averageMonthly === undefined ||
      talentLevel === "" ||
      talentLevel === undefined ||
      pormotion === "" ||
      pormotion === undefined ||
      risingStar === "" ||
      risingStar === undefined ||
      // empSat === "" ||
      // empSat === undefined ||
      empSatPrem1 === "" ||
      empSatPrem1 === undefined ||
      empSatRemote1 === "" ||
      empSatRemote1 === undefined ||
      empCol1 === "" ||
      empCol1 === undefined ||
      timeSpend === "" ||
      timeSpend === undefined ||
      empEng === "" ||
      empEng === undefined ||
      empWorkStatus2 === "" ||
      empWorkStatus2 === undefined ||
      empIdentity === "" ||
      empIdentity === undefined ||
      empRole === "" ||
      empRole === undefined ||
      empPosition === "" ||
      empPosition === undefined ||
      // willRelocate === "" ||
      // willRelocate === undefined ||
      critical === "" ||
      critical === undefined ||
      trendingPref === "" ||
      trendingPref === undefined ||
      percentRemote === "" ||
      percentRemote === undefined ||
      leftCompany === "" ||
      leftCompany === undefined ||
      empComp === "" ||
      empComp === undefined
    ) {
      // If any field is empty or undefined, show an alert
      alert("All data must be filled!");
    } else {
      const userData = {
        Name: name,
        Gender: gender,
        Department: dep,
        GEO: geo,
        Role: role,
        salary: salary,
        left_Company: leftCompany,
        Emp_Title: title,
        last_evaluation: lastEval,
        // number_project: numberProject,
        // average_montly_hours: averageMonthly,
        Talent_Level: talentLevel,
        promotion_last_5years: pormotion,
        Rising_Star: risingStar,
        // Emp_Satisfaction: empSat,
        EMP_Sat_OnPrem_1: empSatPrem1,
        EMP_Sat_Remote_1: empSatRemote1,
        Emp_Collaborative_1: empCol1,
        time_spend_company: timeSpend,
        EMP_Engagement_1: empEng,
        Emp_Work_Status2: empWorkStatus2,
        Emp_Identity: empIdentity,
        Emp_Role: empRole,
        Emp_Position: empPosition,
        // Will_Relocate: willRelocate,
        Critical: critical,
        "Trending Perf": trendingPref,
        Percent_Remote: percentRemote,
        Emp_Competitive_1: empComp,
      };
      userRecommend(dataFetch, userData);
    }
  };

  ////////////////////////////////////////////////////

  useEffect(() => {
    if (data.user) {
      if (data.user.recommendation) {
        setRecommendation(data.user.recommendation);
      }
      let newSkipped = skipped;
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  }, [data]);

  ////////////////////////////////////////////////////

  const handleSave = () => {
    if (data.user) {
      addUser(dataFetch2, data.user);
      toast.success("User saved successfully");
      navigate("/existing-users");
    }
    setOpen(false);
  };

  ////////////////////////////////////////////////////

  const handleCancel = () => {
    setOpen(false);
  };

  ////////////////////////////////////////////////////

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    // Finish button
    if (activeStep === steps.length - 2) {
      handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  ////////////////////////////////////////////////////

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  ////////////////////////////////////////////////////

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  ////////////////////////////////////////////////////

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <KeepMountedModal
        open={open}
        setOpen={setOpen}
        handleSave={handleSave}
        handleCancel={handleCancel}
        recommendation={recommendation}
      /> */}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1, color: "black" }}>
            Step {activeStep + 1}
          </Typography> */}
          <Container>
            {activeStep === 0 && (
              <EmpInfo
                name={name}
                setName={setName}
                dep={dep}
                setDep={setDep}
                geo={geo}
                setGeo={setGeo}
                gender={gender}
                setGender={setGender}
                role={role}
                setRole={setRole}
                salary={salary}
                setSalary={setSalary}
                title={title}
                setTitle={setTitle}
              />
            )}
            {activeStep === 1 && (
              <EmpPer
                lastEval={lastEval}
                setLastEval={setLastEval}
                numberProject={numberProject}
                setNumberProject={setNumberProject}
                averageMonthly={averageMonthly}
                setAverageMonthly={setAverageMonthly}
                talentLevel={talentLevel}
                setTalentLevel={setTalentLevel}
                pormotion={pormotion}
                setPormotion={setPormotion}
                risingStar={risingStar}
                setRisingStar={setRisingStar}
              />
            )}
            {activeStep === 2 && (
              <EmpSat
                empSat={empSat}
                setEmpSat={setEmpSat}
                empSatPrem1={empSatPrem1}
                setEmpSatPrem1={setEmpSatPrem1}
                empSatRemote1={empSatRemote1}
                setEmpSatRemote1={setEmpSatRemote1}
                empCol1={empCol1}
                setEmpCol1={setEmpCol1}
              />
            )}
            {activeStep === 3 && (
              <EmpDetails
                timeSpend={timeSpend}
                setTimeSpend={setTimeSpend}
                empEng={empEng}
                setEmpEng={setEmpEng}
                empWorkStatus2={empWorkStatus2}
                setEmpWorkStatus2={setEmpWorkStatus2}
                empIdentity={empIdentity}
                setEmpIdentity={setEmpIdentity}
                empRole={empRole}
                setEmpRole={setEmpRole}
                empPosition={empPosition}
                setEmpPosition={setEmpPosition}
              />
            )}
            {activeStep === 4 && (
              <Other
                willRelocate={willRelocate}
                setWillRelocate={setWillRelocate}
                critical={critical}
                setCritical={setCritical}
                trendingPref={trendingPref}
                setTrendingPref={setTrendingPref}
                percentRemote={percentRemote}
                setPercentRemote={setPercentRemote}
                leftCompany={leftCompany}
                setLeftCompany={setLeftCompany}
                empComp={empComp}
                setEmpComp={setEmpComp}
              />
            )}
            {activeStep === 5 && (
              <Recommend
                recommend={recommendation}
                satisfied={recommendation === ""}
                handleSave={handleSave}
                handleCancel={handleCancel}
              />
            )}
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              // color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: "gray" }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {/* <Button
              onClick={setAllValuesToOne}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Set Values
            </Button> */}

            {activeStep !== steps.length - 1 && (
              <Button onClick={handleNext}>
                {activeStep === steps.length - 2 ? (
                  !isLoading ? (
                    "Finish"
                  ) : (
                    <CircularProgress />
                  )
                ) : (
                  "Next"
                )}
              </Button>
            )}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default MyStepper;
