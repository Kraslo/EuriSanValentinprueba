import Image from "next/image";
function Preview({ children }) {
  return (
    <div className="preview-container">
        <Image
          height={1240*0.2}
          width={900*0.2}
          layout="intrinsic"
          className={"piruleta"}
          src="/assets/piruleta.png"
          alt="Piruleta"
        />
        <div className="note">
            Quo usque tandem abutere, Catilina, patientia nostra? Curabitur blandit tempus ardua ridiculus sed magna. Pellentesque habitant morbi tristique senectus et netus. Magna pars studiorum, prodita quaerimus.
        </div>
    </div>
  );
}

export default Preview;
