import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (session) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the React App</Text>
        <Text>This is your starting point. Use the navigation bar to explore.</Text>
      <Button onClick={handleAuthAction}>
          {session ? "Logout" : "Login"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;