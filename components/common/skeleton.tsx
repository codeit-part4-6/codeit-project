import styles from '@/styles/skeleton.module.css';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({className = ''}: SkeletonProps) {
  return <div className={`${styles.container} ${className}`} />;
}
