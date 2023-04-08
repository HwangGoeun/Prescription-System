import "./Main.css"

function HospitalPrescList() {
    const presc = [
        { name: "방문 환자 1", date: "2023-04-05"},
        { name: "방문 환자 2", date: "2023-04-06"},
        { name: "방문 환자 3", date: "2023-04-07"},
        { name: "방문 환자 4", date: "2023-05-08"}
    ];

    return (
        <div className="main">
            <h1 id="header">Prescription System</h1>
            <div className='list'>
                {presc.map((pre, index) => {
                    return (
                        <button variant="primary" size="lg">
                            {pre.name} / {pre.date}
                        </button>
                    ); 
                })}
            </div>
        </div>
    );
}

export default HospitalPrescList;