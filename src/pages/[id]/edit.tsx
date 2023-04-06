import { getExpense, updateExpense } from "@/api/expense";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Overview = () => {
  const router = useRouter();
  const { id } = router.query;
  const [amount, setAmount] = useState<number>();
  const [info, setInfo] = useState<string>("");

  useEffect(() => {
    if (id)
      getExpense(parseInt(id as string)).then(({ amount, info }) => {
        setAmount(amount);
        setInfo(info || "");
      });
  }, [id]);

  const onSubmit = () => {
    updateExpense(parseInt(id as string), {
      amount,
      info,
    }).then(() => router.push(`/${id}`));
  };

  const cancel = () => router.push(`/${id}`);

  return (
    <>
      <div className="pb-12 border-b border-gray-900/10">
        <h2 className="text-base font-semibold leading-7 text-text-100">
          Profile
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full sm:col-span-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-text-100"
            >
              Amount*
            </label>
            <div className="mt-2">
              <input
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                type="number"
                name="amount"
                id="amount"
                autoComplete="amount"
                className="block rounded-lg w-full border-white border flex-1 bg-transparent py-1.5 pl-1 text-text-100 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="123.45"
                required
              />
            </div>
          </div>
          <div className="w-full sm:col-span-4">
            <label
              htmlFor="info"
              className="block text-sm font-medium leading-6 text-text-100"
            >
              Info
            </label>
            <div className="mt-2">
              <input
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                type="text"
                name="info"
                id="info"
                autoComplete="info"
                className="block w-full rounded-lg border-white border flex-1 bg-transparent py-1.5 pl-1 text-text-100 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="lorem ipsum"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <button
          type="submit"
          className="px-3 py-2 border border-white rounded-full"
          onClick={onSubmit}
        >
          Save
        </button>
        <button
          type="submit"
          className="px-3 py-2 border border-white rounded-full"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Overview;
