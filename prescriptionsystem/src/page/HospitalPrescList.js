import "./Main.css"

function HospitalPrescList() {
    const presc = [
        { name: "김환자", birth: "2002-06-27", date: "2023-03-05"},
        { name: "황환자", birth: "2002-10-11", date: "2023-04-06"},
        { name: "송환자", birth: "2002-12-20", date: "2023-04-07"},
        { name: "강환자", birth: "2002-01-12", date: "2023-04-07"},
        { name: "윤환자", birth: "2002-02-14", date: "2023-05-08"},
        { name: "윤환자", birth: "2002-10-18", date: "2023-05-08"}
    ];

    return (
        <div className="main">
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <button variant="primary" size="lg">
                            <div className="buttonText">
                                <div className="name">{pre.name}</div>
                                <br></br>
                                최근 방문일자 : {pre.date}
                            </div>
                            <div className="logo"> </div>
                        </button>
                    ); 
                })}
            </div>
        </div>
    );
}

export default HospitalPrescList;