import Button from "../components/Button";
import ImageUpload from "../components/services/ImageUpload";

interface ChallengeAddInputProps {
  label?: string;
  height?: number | string;
  width?: number | string;
  bgcolor?: string;
  type?: "text" | "date" | "upload";
}

function ChallengeAddInput({
  label = "",
  height = "fit-content",
  width = "100%",
  bgcolor = "#D9D9D9",
  type = "text",
}: ChallengeAddInputProps) {
  const heightValue = typeof height === "number" ? `${height}rem` : height;

  const widthValue = typeof width === "number" ? `${width}rem` : width;

  const containerStyle = {
    color: "#7A6053",
    height: heightValue,
    width: widthValue,
    background: bgcolor,
  };

  switch (type) {
    case "date":
      return (
        <div className="p-4 rounded mb-7" style={containerStyle}>
          <input
            type="date"
            className="w-full bg-transparent outline-none"
            placeholder={label}
          />
        </div>
      );

    case "upload":
      return (
        <div
          className="p-4 rounded mb-7 overflow-x-auto overflow-y-hidden"
          style={containerStyle}
        >
          <ImageUpload></ImageUpload>
        </div>
      );

    default:
      return (
        <div className="p-4 rounded mb-7" style={containerStyle}>
          <input
            type="text"
            placeholder={label}
            className="w-full bg-transparent outline-none"
          />
        </div>
      );
  }
}

ChallengeAdd.Label = ChallengeAddInput;

interface ChallengeAddProps {
  children?: React.ReactNode;
}
export default function ChallengeAdd() {
  return (
    <div className="flex bg-[#D0CACA] w-full mt-20 ml-10 h-150 rounded-2xl drop-shadow-xl/30">
      <div className="w-6/10  p-10">
        <ChallengeAddInput label="Art Challenge Title:"></ChallengeAddInput>
        <ChallengeAddInput label="Descripton:" height={12}></ChallengeAddInput>
        <ChallengeAddInput type="upload"></ChallengeAddInput>
        <div className="ml-auto w-fit">
          <Button label="Upload File"></Button>
        </div>
      </div>
      <div className=" bg-[#C3BCBC] h-full w-4/10 rounded-2xl drop-shadow-xl/25 p-10">
        <ChallengeAddInput
          label="Challenge Theme:"
          bgcolor="#D0CACA"
        ></ChallengeAddInput>

        <ChallengeAddInput
          width={17}
          type="date"
          label="Due Date"
          bgcolor="#D0CACA"
        ></ChallengeAddInput>

        <ChallengeAddInput
          label="Additional Info:"
          bgcolor="#D0CACA"
          height={17}
        ></ChallengeAddInput>
        <div className="flex ml-auto w-fit gap-5">
          <Button label="Cancel" bgColor="#AD6565"></Button>
          <Button label="Post" bgColor="#9FB27F"></Button>
        </div>
      </div>
    </div>
  );
}
