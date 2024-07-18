import React, { useEffect, useRef } from "react";
import { useCodeMirror } from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { useRecoilState } from "recoil";
import { codeAtom } from "../../atoms/problemAtom";

export const CodeBoxZone = () => {
  const [code, setCode] = useRecoilState(codeAtom);
  const editorRef = useRef<HTMLDivElement>(null);

  // CodeMirror 설정 및 초기화
  const { setContainer } = useCodeMirror({
    container: editorRef.current,
    value: code,
    extensions: [
      css(), // CSS 구문 강조 모드
    ],
    onChange: (value) => {
      setCode(value); // 코드 변경 시 상태 업데이트
    },
  });

  // 컴포넌트가 마운트될 때 한 번 실행됨
  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current); // 에디터를 DOM 요소에 설정
    }
  }, [setContainer]);
  return (
    <div>
      <div ref={editorRef} />
    </div>
  );
};

export default CodeBoxZone;
