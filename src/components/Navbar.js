import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      {/* Sign in Link */}
      <NavLink to="/signin">
        <Text size="xl" color="white">
          Sign in
        </Text>
      </NavLink>

      {/* Title and Logo */}
      <NavLink to="/">
        <Box display="flex" alignItems="center">
          <Box height={50} width={50}>
            <Image
              alt="Brehaha Logo"
              naturalHeight={1}
              naturalWidth={1}
              src="/public/icons/logo.svg"
            />
          </Box>
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </Box>
      </NavLink>

      {/* Sign Up Link */}
      <NavLink to="/signup">
        <Text size="xl" color="white">
          Sign up
        </Text>
      </NavLink>
    </Box>
  );
}
