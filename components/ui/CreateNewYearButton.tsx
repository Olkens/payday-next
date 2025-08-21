import { Month } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface cnybProps {
  setMonths: React.Dispatch<React.SetStateAction<Month[]>>;
}

export default function CreateNewYearButton(props: cnybProps) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Create new year</Button>
      </div>
    </>
  );
}
