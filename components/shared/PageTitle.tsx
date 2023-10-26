interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className="w-full flex gap-5 xs:gap-3 items-center px-6 mt-10">
      <div className="flex-1 h-3 rounded-md bg-[#0f1724]" />
      <h1 className="text-light-1 text-2xl xs:text-xl font-semibold">
        {title}
      </h1>
      <div className="flex-1 h-3 rounded-md bg-[#0f1724]" />
    </div>
  );
};

export default PageTitle;
