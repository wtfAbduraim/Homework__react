import React from "react";
import "./Our.scss"

export default function Our() {

  const [our] = React.useState([
    {
        id: 1,
        img: "https://as2.ftcdn.net/v2/jpg/06/14/61/45/1000_F_614614543_0alkdeqzSamlbcFan5KvtZRhbhRg7CLD.jpg"
    },
    
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uotBMX99Ac1iptBJ3yf5IHrJFvdaMCDNRmO9F7oYTMFpcPQj7nlxyTlNgvEbiX2xcA&usqp=CAU"
    },
    
    {
        id: 3,
        img: "data:image/png;base64,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"
    },
    
    {
        id: 4,
        img: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
    },
    
    {
        id: 5,
        img: "https://cdn.worldvectorlogo.com/logos/logitech-2.svg"
    }
])


  return (
    <>
    <section className="our">
      <div className="container">
        <h3 className="our__heading">OUR TRUSTED CLIENTS</h3>

        <ul className="our__list">
              {our.map(el => (
                <li className="our__item" key={el.id}>
                  <a className="our__link" href="#">
                    <img className="our__img" src={el.img} alt="png" width={200} height={50}/>
                  </a>
                </li>
              ))}
            </ul>
      </div>
    </section>
    </>
  );
}
