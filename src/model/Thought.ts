export interface Thought {
  message: string;
  user: string;
  _id: string;
  hearts: number;
  createdAt: object;
}

export interface BackendResponse {
  message: Thought[];
}
