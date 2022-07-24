export default function LoadingSkeleton() {
  return (
    <div className='animate-pulse flex flex-col'>
      {new Array(10).fill(null).map((_, idx) => (
        <div key={idx} className='h-10 w-full bg-slate-200 rounded-sm mb-2' />
      ))}
    </div>
  );
}
