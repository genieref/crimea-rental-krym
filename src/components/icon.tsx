'use client';

import Image from 'next/image';

export default function Icon(
  props: React.SVGProps<SVGSVGElement> & {name: string}
) {
  const {name, ...rest} = props;
  return <svg {...rest} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
}
