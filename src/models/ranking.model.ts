import { IconType } from "react-icons";

interface userRanking {
  id: number;
  email: string;
  password: string;
  nickname: string;
  total_score: number;
  medal?: React.ComponentType;
}

export type rankingArray = userRanking[];
