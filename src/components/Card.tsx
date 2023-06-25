type CardProps = {
  data: {
    title: string;
    date: string;
    paymentMode: string;
    price: number;
    isCompleted?:boolean
  };
};

const Card = (Props: CardProps) => {
  return (
    <div className="w-full h-20 border-2 rounded-3xl border-slate-600 flex justify-between px-10 items-center">
      <div className="flex gap-3 items-center justify-center">
        <img
          src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2r0Th?ver=5b7d"
          className="rounded-full h-10 w-10"
        />
        <div>
          <h1 className="text-bold text-base">{Props.data.title}</h1>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm text-slate-500 font-semibold">
              {Props.data.date}
            </h1>
            <span>•</span>
            <h1 className="text-sm text-slate-500 font-semibold">
              {Props.data.paymentMode} Payemnt
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-bold text-lg">${Props.data.price}</h1>
      </div>
    </div>
  );
};

export default Card;
