import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {

  const [imageClass, setImageClass] = useState("san-valentin reduced");

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window?.innerWidth);
      if (window?.innerWidth > 600) {
        setImageClass("san-valentin");
      } else {
        setImageClass("san-valentin reduced");
      }
    }
    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <Link href="/">
      <Image
          height={imageClass === "san-valentin reduced" ? 34*0.6 : 34}
          width={imageClass === "san-valentin reduced" ? 288*0.6 : 288}
          layout="intrinsic"
          className={imageClass}
          src="/assets/sanvalentin.svg"
          alt="Eurielec's San Valentin"
        />
      </Link>
      <div className="right-menu">
        <Link href="/check">Comprobar</Link>
        <a href="mailto:sanvalentin@eurielec.etsit.upm.es">Contacto</a>
      </div>
    </div>
  );
}

export default NavBar;
