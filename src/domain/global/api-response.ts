export type APIResponse<T> = {
  data: T | null;
  isSuccess: boolean;
  msg: string;
};
