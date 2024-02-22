import NavBar from "./NavBar";
import pngegg from "../../assets/pngegg.png";

function LandingPage() {
  return (
    <div className="h-full bg-slate-800">
      <NavBar />
      <div className="flex justify-around">
        <div className="flex items-center justify-center h-screen w-1/2">
          <img src={pngegg} width={500} height={500}/>
        </div>
        <div className="flex items-center justify-center h-screen w-1/2">
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-extrabold text-center mt-6">NameApp</h1>
            <p className="text-white text-center">
              Esta es una pagina simplemente para poder probar la funcionabilidad
              del registro de usuarios usando una api de rails 7 con un front end
              de react js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;