import {
  TextInput,
  Anchor,
  PasswordInput,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
export default function LoginForm() {
  return (
    <form>
      <TextInput label="Email" required placeholder="Enter your email" />
      <PasswordInput
        mt="md"
        label="Password"
        placeholder="Enter your password"
        required
      />
      <Group mt="md" position="apart">
        <Checkbox label="Remember me" />
        <Anchor<"a"> href="/" size="sm">
          Forgot password
        </Anchor>
      </Group>
      <Button type="submit" fullWidth mt="xl">
        Sign in
      </Button>
    </form>
  );
}
