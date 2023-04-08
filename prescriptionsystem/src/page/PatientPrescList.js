import "./Main.css"

function PatientPrescList() {
    const presc = [
        { name: "방문 병원 1", date: "2023-04-05"},
        { name: "방문 병원 2", date: "2023-04-05"},
        { name: "방문 병원 3", date: "2023-04-08"}
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

export default PatientPrescList;