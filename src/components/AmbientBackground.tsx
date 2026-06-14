export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-700/20 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-700/15 blur-[100px]" />
    </div>
  );
}
