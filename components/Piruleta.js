import Image from "next/image";
function Piruleta({ children }) {
  return (
    <div className="piruletas-container">
        <Image
          height={800*0.4}
          width={800*0.4}
          layout="intrinsic"
          className={"piruleta"}
          src="/assets/piruleta.png"
          alt="Piruleta"
        />
    </div>
  );
}

export default Piruleta;
