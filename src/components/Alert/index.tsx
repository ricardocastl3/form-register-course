import { AlertContainer } from "./styles";

interface AlertProps {
  content: string | undefined;
}
export function Alert({ content }: AlertProps) {
  return <AlertContainer>{content}</AlertContainer>;
}
