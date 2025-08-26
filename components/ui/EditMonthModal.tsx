import { Month } from "@/lib/types";
import { Input } from "./input";

interface EMMProps {
  setShowModal: (bool: boolean) => void;
  month: Month;
}

export default function EditMonthModal(props: EMMProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/90 ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit month</h2>
        <p>Income</p>
        <Input
          type="number"
          name="income"
          placeholder="Income"
          value={props.month.income}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => props.setShowModal(false)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}
