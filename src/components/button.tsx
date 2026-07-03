import { cn } from '@/lib/helpers';

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={cn('btn-primary', className)} />;
}
