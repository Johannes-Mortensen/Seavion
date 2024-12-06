const SectionDivider = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
        <div className="w-3 h-3 rounded-full bg-blue-500/30" />
        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;