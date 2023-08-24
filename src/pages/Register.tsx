import { Container, Title, Text, Paper, Anchor } from "@mantine/core";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text align="center" color="dimmed" size="sm" mt={5}>
        Already have an account?{" "}
        <Anchor<"a"> href="/login" size="sm">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <RegisterForm />
      </Paper>
    </Container>
  );
}
