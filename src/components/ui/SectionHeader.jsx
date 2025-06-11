const SectionHeader = ({ title, children }) => {
  return (
    <div className="bg-blue-700 text-white py-4 px-4 my-4 flex justify-between items-center rounded-2xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>{children}</div>
      
    </div>
  );
};

export default SectionHeader;