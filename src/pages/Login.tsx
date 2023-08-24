import { Container, Title, Text, Paper, Anchor } from "@mantine/core";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
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
        Do not have an account yet?{" "}
        <Anchor<"a"> href="/register" size="sm">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <LoginForm />
      </Paper>
    </Container>
  );
}
