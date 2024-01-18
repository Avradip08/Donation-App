// FAQsList.js
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { TextField, Checkbox, Button, FormControlLabel, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqList from '../configs/FaqList';

const Faq = () => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }} >
      <Typography variant="h5" gutterBottom>
        FAQs
      </Typography>
      {FaqList.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{ marginBottom: '10px' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panelbh-content`}
            id={`panelbh-header`}
        >
            <Typography>
                Feel free to send us your Queries!
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ContactForm/>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSendEmail = () => {
    // Add logic to send email here
    console.log(`Sending email to ${email}`);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '10px' }}>
      <form>
      <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          style={{ marginBottom: '20px' }}
        />
      <TextField
          label="Your Question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={handleQuestionChange}
          style={{ marginBottom: '20px' }}
        />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button
            variant="contained"
            color="primary"
            onClick={handleSendEmail}
            disabled={!email}
            style={{ marginTop: '20px' }}
            >
            Send Email
        </Button>
        </div>
      </form>
    </Container>
  );
};

export default Faq;
