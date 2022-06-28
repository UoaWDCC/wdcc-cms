import React from "react";
import SocialsCard from "../../components/SocialsCard/SocialsCard";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import logo from "../../resources/logos/primary_512.png";

const SocialsPage = () => {
  return (
    <Box sx={{ bgcolor: "beige", minHeight: "100vh", height: "100" }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 7,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="WDCC Logo" src={logo} sx={{ width: 120, height: 120 }} />
          <Typography variant="h4">
            Web Development and Consulting Club
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ width: 1 }}>
          <SocialsCard text={"facebook"} link={"https://facebook.com/"} />
        </Stack>
      </Container>
    </Box>
  );
};

export default SocialsPage;
