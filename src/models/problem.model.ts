export type ProblemIds = number[];

export interface Problem {
  id: number;
  title: string;
  description: string;
  answer: string;
  level: number;
  score: number;
  solved?: boolean;
}

export type ProblemsArray = Problem[];

export interface ProblemDetail {
  title: string;
  description: string;
}

export interface ProblemDetailAnswer extends ProblemDetail {
  answer: string;
  score: number;
}
