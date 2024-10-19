import "./About.css";

function About() {
  const facilitiesData = [
    { color: "red", iconClass: "fas fa-bus", label: "School Bus" },
    { color: "orange", iconClass: "fas fa-futbol", label: "PlayGround" },
    { color: "blue", iconClass: "fas fa-home", label: "Healthy Canteen" },
    { color: "brown", iconClass: "fas fa-chalkboard-teacher", label: "Positive learning" },
  ];

  return (
    <>
      <div className="school-facilities">
        <div className="facilities">
          <h1>School Facilities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            similique velit magni distinctio voluptatem.
          </p>
        </div>
        <div className="cards">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="icons" style={{ color: facility.color }}>
              <i className={facility.iconClass}></i><span>{facility.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
