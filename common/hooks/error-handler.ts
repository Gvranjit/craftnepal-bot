import { ErrorWithType } from '../types/common';

const useErrorHandler = () => {
  function handleError(err: any) {
    const error = err as ErrorWithType;
  }
  return { handleError };
};
export { useErrorHandler };
