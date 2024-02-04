import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import styled from "@mui/material/styles/styled";
export const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
    color: ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.common.black
    };  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    color: ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.common.black
    };
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    color: ${
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white
    };
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.common.black
    };
    border-radius: 50px;
    
    background-color: ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[700] 
        : theme.palette.grey[700]
    };
    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[700]
          : theme.palette.grey[700]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.common.black
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.common.black
    };
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    color: ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.common.black
    };    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[400]
          : theme.palette.grey[200]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.common.black
      };
    }
  }
  `
)