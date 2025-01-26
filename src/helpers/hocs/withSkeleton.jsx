import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';

export const withSkeleton = (Component, type, count) => {
  return function WithSkeleton({isLoading, ...restProps}) {
    if(isLoading) {
      return <Skeleton type={type} count={count} />
    }
    return <Component {...restProps} />
  };
};
