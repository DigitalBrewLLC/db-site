import TeaCupIcon from "@/icons/TeaCupIcon";

const ComingSoon = () => {
  return (
    <div className="bg-background h-[90vh] flex items-center justify-center">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Coming Soon
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8">
            Currently working on something great.
          </p>
          <div className="mt-10 flex justify-center">
            <TeaCupIcon size={275} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
