import "./Classes.css";

function Classes() {
  const classData = [
    { image: "./images/class1.jpg", title: "Art And Drawing" },
    { image: "./images/class2.jpg", title: "Programming" },
    { image: "./images/class3.jpg", title: "Languages" },
    { image: "./images/class4.jpg", title: "Sports" },
  ];

  const teacherData = [
    { image: "./images/teacher1.jpg", name: "JHON" },
    { image: "./images/teacher2.jpg", name: "LEACH" },
    { image: "./images/teacher3.jpg", name: "HARRY" },
  ];

  return (
    <>
      <div className="class-bg">
        <h1>School Classes</h1>
        <div className="classes">
          {classData.map((classItem, index) => (
            <div key={index} className="img">
              <img src={classItem.image} alt={`class-img-${index}`} />
              <h4>{classItem.title}</h4>
            </div>
          ))}
        </div>

        <h1>School Teacher</h1>
        <div className="classes">
          {teacherData.map((teacher, index) => (
            <div key={index} className="img">
              <img src={teacher.image} alt={`teacher-img-${index}`} />
              <h4>{teacher.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Classes;
