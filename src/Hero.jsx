import cover from "./cover.jpg";

function Hero() {
  return (
    <div>
      <img src={cover} alt="cover" className="cover" />
      <div className="para">
        <i>
          <h1>Spice World Your Ultimate Chilli Destination</h1>
          <div className="para2">
            <p>SHRINIDHI ENTERPRISES ARE INTO,</p>
            <p>PROCESSING AND MANUFACTURING OF</p>
            <p>FINELY GRIND HILLI POWDER JUST FOR YOU ............</p>
          </div>
        </i>
      </div>
          <button className="btn">Shop Now</button>
    </div>
  );
}


export default Hero;
