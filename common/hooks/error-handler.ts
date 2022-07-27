import { ErrorWithType } from '../types/common';

const useErrorHandler = () => {
  function handleError(err: any) {
    const error = err as ErrorWithType;
    console.error(error);
  }

  return { handleError };
};
export { useErrorHandler };
