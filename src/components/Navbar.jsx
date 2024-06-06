import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" mx={2}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;