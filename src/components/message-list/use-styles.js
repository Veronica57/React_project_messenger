import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";

export const useStyles = makeStyles((ctx) => {
  console.log(ctx);
  return {
    wrapper: {
      border: `1px solid ${ctx.palette.primary.main}`,
      padding: "15px",
    },
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: `${ctx.palette.primary.main}`,
      cursor: "pointer",
    },
  };
});
