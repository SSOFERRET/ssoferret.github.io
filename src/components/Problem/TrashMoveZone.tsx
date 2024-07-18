import { styled } from "styled-components";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerAtom, codeAtom, solveAtom } from "../../atoms/problemAtom";
import Trash from "../../assets/img/Trash.gif";
import TrashCan from "../../assets/img/TrashCan.gif";

function TrashMoveZone() {
  const code = useRecoilValue(codeAtom);
  const answer = useRecoilValue(answerAtom);
  const [solve, setSolve] = useRecoilState(solveAtom);

  const previewRef = useRef<HTMLDivElement>(null); // 프리뷰 영역을 참조하기 위한 ref
  const answerRef = useRef<HTMLDivElement>(null);

  // 충돌 감지 함수
  const checkCollision = (rect1: DOMRect, rect2: DOMRect): boolean => {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

  // 코드가 변경될 때 프리뷰 업데이트
  useEffect(() => {
    if (previewRef.current && answerRef.current) {
      previewRef.current.innerHTML = `<style>.example${code}</style><div class="example"><img width=100 height=100 style="position: absolute" src=${Trash} alt="circle" /></div>`;
      const previewImage = previewRef.current.querySelector("img");
      answerRef.current.innerHTML = `<style>.answer{${answer}}</style><div class="answer"><img width=100 height=100 src=${TrashCan} alt="rectangle" /></div>`;
      const answerImage = answerRef.current.querySelector("img");

      if (previewImage && answerImage) {
        const rect1 = previewImage.getBoundingClientRect();
        const rect2 = answerImage.getBoundingClientRect();

        if (checkCollision(rect1, rect2)) {
          setSolve(true);
        } else {
          setSolve(false);
        }
      }
    }
  }, [answer, code, setSolve, solve]);
  return (
    <TrashMoveZoneStyle>
      <div className="moveZone">
        <div ref={previewRef} />
        <div ref={answerRef} />
      </div>
    </TrashMoveZoneStyle>
  );
}

const TrashMoveZoneStyle = styled.div`
  .moveZone {
    justify-content: space-between;
    background: #d7e1d9;
  }
`;

export default TrashMoveZone;
