"use client";

interface YearPickerProps {
  yearCounter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

export default function YearPicker(props: YearPickerProps) {
  return (
    <div className={"flex flex-row justify-center my-4"}>
      <button
        onClick={props.decreaseCounter}
        className={
          "cursor-pointer border-s-black rounded-sm py-2 px-4 outline border-spacing-1"
        }
      >
        {" "}
        <p> {"<-"} </p>{" "}
      </button>
      <p className={"px-4"}> {props.yearCounter} </p>
      <button
        onClick={props.increaseCounter}
        className={
          "cursor-pointer border-s-black rounded-sm py-2 px-4 outline border-spacing-1"
        }
      >
        {" "}
        <p> {"->"} </p>{" "}
      </button>
    </div>
  );
}
