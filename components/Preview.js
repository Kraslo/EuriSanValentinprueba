import Image from "next/image";
function Preview(props) {
  return (
    <div className="preview-container">
      <div className="card-container">
        <Image
          height={1240*0.2}
          width={900*0.2}
          layout="intrinsic"
          className={"piruleta"}
          src="/assets/piruleta.png"
          alt="Piruleta"
        />
        <div className="note">
            {props.message}
        </div>
      </div>
    </div>
  );
}

export default Preview;
