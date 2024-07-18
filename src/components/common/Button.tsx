import { styled } from "styled-components";
import { ButtonSize, ButtonScheme, BorderRadius } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  borderRadius?: BorderRadius;
  disabled?: boolean;
}

function Button({
  children,
  size,
  scheme,
  disabled,
  borderRadius = "default",
  onClick,
  onMouseOver,
  onMouseOut,
}: Props) {
  return (
    <ButtonStyle
      size={size}
      scheme={scheme}
      disabled={disabled}
      borderRadius={borderRadius}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
  display: ${({ theme, size }) => theme.buttonSize[size].display};
  align-items: ${({ theme, size }) => theme.buttonSize[size].alignItems};
  justify-content: ${({ theme, size }) =>
    theme.buttonSize[size].justifyContent};

  font-size: ${({ theme, size }) => theme.buttonSize[size].fontSize};
  padding: ${({ theme, size }) => theme.buttonSize[size].padding};
  width: ${({ theme, size }) => theme.buttonSize[size].width};
  height: ${({ theme, size }) => theme.buttonSize[size].height};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius as BorderRadius]};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
