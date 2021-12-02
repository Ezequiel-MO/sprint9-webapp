import { FooterContainer, SocialIcons, AboutThePage } from "./styles";
import { Icon } from "@iconify/react";
import { IconButton, Typography } from "@mui/material";
import { selectDarkMode } from "../../../../features/DarkModeSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <FooterContainer darkMode={darkMode}>
      <SocialIcons>
        <IconButton>
          <a
            href='https://www.linkedin.com/company/335093/admin/'
            target='_blank'
          >
            <Icon icon='akar-icons:linkedin-fill' width='30' color='#ccc' />
          </a>
        </IconButton>
        <IconButton>
          <a
            href='https://www.instagram.com/cutting_edge_events/'
            target='_blank'
          >
            <Icon icon='akar-icons:instagram-fill' width='30' color='#ccc' />
          </a>
        </IconButton>
        <IconButton>
          <a href='https://www.facebook.com/EsCuttingEdge/' target='_blank'>
            <Icon icon='akar-icons:facebook-fill' width='30' color='#ccc' />
          </a>
        </IconButton>
      </SocialIcons>
      <AboutThePage>
        <Typography variant='overline' component='h6'>
          DESIGNED BY
        </Typography>
        <Typography variant='overline' component='p'>
          @CUTT/events - 2021
        </Typography>
        <Typography variant='overline' component='h6'>
          ABOUT THIS QUOTATION
        </Typography>
        <Typography
          style={{ color: darkMode ? "#fff" : "#000", fontStyle: "italic" }}
          variant='body'
          gutterBottom
        >
          This Quotation has been crafted with care by the
          <strong> CUTT/events people</strong>. The Team has fully embraced the
          change to a digital mindset. This is only the beginning. We are
          working hard to make this the best possible experience for you, so
          please contact us at{" "}
          <a href='mailto:miranda@cutt.events'>miranda@cutt.events</a> and leave
          us your feedback and suggestions on how we can improve.
        </Typography>
      </AboutThePage>
    </FooterContainer>
  );
};

export default Footer;
