import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import {
  Box,
  Paper,
  Stack,
  Typography,
  Link,
  Button,
  Chip,
  Divider,
  Tabs,
  Tab,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TabPanel from '../../../components/TabPanel/TabPanel';

import './Philanthropy.css';
import philanthropyLogo from '../../../assets/logos/philanthropy.png';

const Philanthropy = () => {
  const [signatureEventsValue, setSignatureEventsValue] = React.useState(0);
  const [regularActivitiesValue, setRegularActivitiesValue] = React.useState(0);

  const handleSignatureEventsChange = (_event: unknown, newValue: number) => {
    setSignatureEventsValue(newValue);
  };

  const handleRegularActivitiesChange = (_event: unknown, newValue: number) => {
    setRegularActivitiesValue(newValue);
  };

  return (
    <>
      <PillarHero
        logo={philanthropyLogo}
        backgroundColor="#35106a"
        title="UFFSA PHILANTHROPY"
      />

      <PillarDescription
        backgroundColor="var(--white)"
        style={{ textAlign: 'justify' }}
        content="Thank you for your interest in joining University of Florida's Filipino Student Association's Community Service.
                As a family-oriented organization, we believe it is important to give back to our community. There are many families and individuals who are in need; a little help from our pamilya (family) can make a big impact on their lives. Even though every little thing counts, we strive to do our best to provide the most diligent service. We hope to leave smiles on their faces and UFFSA in their hearts."
      />

      {/* SIGNATURE EVENTS */}
      <PillarSignatureEvents>
        <Tabs
          value={signatureEventsValue}
          onChange={handleSignatureEventsChange}
          centered
          textColor="inherit"
          className="philanthropy-tabs"
        >
          <Tab label="GK Month" />
          <Tab label="KLIKme" />
        </Tabs>

        {/* GK TAB */}
        <TabPanel value={signatureEventsValue} index={0}>
          <h2>Gawad Kalinga Month</h2>
          <p>
            Gawad Kalinga (GK) Month is a philanthropic initiative held each March,
            where FSA hosts a series of events to raise funds in support of empowering
            underprivileged communities in the Philippines! It’s a meaningful time for
            the FSA community in Gainesville to come together and make a positive impact
            for Filipinos back home. Each year, GK Month is guided by a unique theme
            that highlights the spirit and mission of the initiative. Past events have
            included Pie-Milya, restaurant fundraisers, dance workshops, and advocacy
            workshops.
          </p>
        </TabPanel>

        {/* KLIKme TAB */}
        <TabPanel value={signatureEventsValue} index={1}>
          <Box className="klikme-hero">
            <Stack direction="row" alignItems="center" spacing={1}>
              <VolunteerActivismIcon fontSize="large" />
              <Typography variant="h3" className="klikme-title">KLIKme</Typography>
            </Stack>
            <Typography variant="subtitle1" className="klikme-subtitle">
              Klik Mobile Education • Digital literacy • Community empowerment
            </Typography>
          </Box>

          <Stack spacing={3} sx={{ mt: 3 }}>
            <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, border: '1px solid var(--light-gray)' }}>
              <Stack spacing={2}>
                <Typography variant="body1">
                  <strong>Klik Mobile Education</strong> is a technology‑based program bringing relevant training and education to
                  marginalized communities in the Philippines. Learners gain <em>digital literacy</em> and practical life skills to
                  help break the cycle of poverty.
                </Typography>

                <Typography variant="body1">
                  FSA members can become <em>Kaibigans</em>, joining monthly Zoom sessions to encourage and learn alongside the
                  Learners and a global Filipino community.
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Monthly Zoom sessions" variant="outlined" />
                  <Chip label="Mentorship & support" variant="outlined" />
                  <Chip label="Global community" variant="outlined" />
                </Stack>
              </Stack>
            </Paper>

            <Divider />

            {/* CTA */}
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4 }}>
              <Stack spacing={1}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Become a Kaibigan — Sign Up
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  KLIKme Interest Form 2025–26
                </Typography>

                <Button
                  component="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8FWHyezzui3M0NJ2_c0OnRtnGLXnv34ZZ3kTeGUpUilQMjw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  endIcon={<OpenInNewIcon />}
                  sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, mt: 1, borderRadius: 999, px: 3 }}
                >
                  Fill out the Interest Form
                </Button>
              </Stack>
            </Paper>

            <Typography variant="body1">
              Want the details? Check out our{' '}
              <Link
                href="https://docs.google.com/document/d/1docEYYpr9yrt0sj4g63d8MlZ-GJRZ7ncmET4D50bAuI/edit?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                information page about FSA’s partnership with Klik
              </Link>
              .
            </Typography>
          </Stack>
        </TabPanel>
      </PillarSignatureEvents>

      {/* REGULAR ACTIVITIES */}
      {/* <PillarRegularActivities>
        <Tabs
          value={regularActivitiesValue}
          onChange={handleRegularActivitiesChange}
          centered
          textColor="inherit"
          className="philanthropy-tabs"
        >
          <Tab label="Podcasts" />
          <Tab label="MAFFIA" />
          <Tab label="Fundraising" />
        </Tabs>

        <TabPanel value={regularActivitiesValue} index={0}>
          <h2>Project Lunchbox</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </TabPanel>

        <TabPanel value={regularActivitiesValue} index={1}>
          <h2>MAFFIA</h2>
          <p>
            The Membership and FSA First‑Year Involvement Alliance (MAFFIA) helps first‑year students
            build leadership skills while learning the behind‑the‑scenes of FSA.
          </p>
        </TabPanel>

        <TabPanel value={regularActivitiesValue} index={2}>
          <h2>Fundraising</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </TabPanel>
      </PillarRegularActivities> */}
    </>

  );
};

export default Philanthropy;
