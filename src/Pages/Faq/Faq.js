import React from "react";
import Logo from "../../Assets/images/zairza_logo.png";
import menu from "../../Assets/images/Hamburger Menu.png";
import "./Faq.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faq_img from "../../Assets/images/faq.png"

const Faq = () => {
  return (
    <div className="faq-section">
      

      <h1 className="heading">FAQs</h1>
      
      <div className="faq">
      <div className="faq_left">
        <Accordion className="accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="acc-heading" style={{fontSize: "20px", color: "rgba(58, 55, 55, 1)"}}>Why Zairza?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="acc-desc">
              For people persuing careers in computers and/or robotics, writing
              code, developing software, and creating exceptional things. That's
              what we do here. We do things and we help people who are really
              interested in them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="acc-heading" style={{fontSize: "20px", fontWeight: "bold", color: "rgba(58, 55, 55, 1)"}}>How can I join?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="acc-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="acc-heading" style={{fontSize: "20px", fontWeight: "bold", color: "rgba(58, 55, 55, 1)"}}>What is the Scope of Zairza?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="acc-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="acc-heading" style={{fontSize: "20px", fontWeight: "bold", color: "rgba(58, 55, 55, 1)"}}>
              I have a Tech project. How can Zairza help me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="acc-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="acc-heading" style={{fontSize: "20px", fontWeight: "bold", color: "rgba(58, 55, 55, 1)"}}>What are the club timings?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="acc-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="faq_right">
        <img className="faq_img" src={faq_img} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Faq;
