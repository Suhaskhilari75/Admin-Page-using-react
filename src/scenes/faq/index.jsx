import { Box, useTheme, Typography, Accordion } from "@mui/material";
import Header from "../../components/Header";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title="FAQ" subtitle={"Frequently Asked Question Page"}></Header>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa quisquam eos! Eligendi debitis odio porro itaque doloremque id
            laborum, culpa tempora inventore molestiae non ipsa exercitationem
            iure hic tenetur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa quisquam eos! Eligendi debitis odio porro itaque doloremque id
            laborum, culpa tempora inventore molestiae non ipsa exercitationem
            iure hic tenetur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa quisquam eos! Eligendi debitis odio porro itaque doloremque id
            laborum, culpa tempora inventore molestiae non ipsa exercitationem
            iure hic tenetur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa quisquam eos! Eligendi debitis odio porro itaque doloremque id
            laborum, culpa tempora inventore molestiae non ipsa exercitationem
            iure hic tenetur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa quisquam eos! Eligendi debitis odio porro itaque doloremque id
            laborum, culpa tempora inventore molestiae non ipsa exercitationem
            iure hic tenetur.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
