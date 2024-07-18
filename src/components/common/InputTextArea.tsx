import { styled } from "styled-components";
import React, { ForwardedRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

const TextareaBox = React.forwardRef(
  (
    { placeholder, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <TextareaBoxStyle
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        {...props}
      />
    );
  }
);

const TextareaBoxStyle = styled.textarea`
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  width: 100%;
  height: 25px;

  overflow: auto;
  resize: none;
  border: none;
  border-radius: 0px;
  outline: none;
`;

export default TextareaBox;
