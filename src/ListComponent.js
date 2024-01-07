let ListComponent = ()=>{
    var nos =[10,20,30,40,50]

    var sqnos = nos.map(i => {
        return <li>{i * i}</li>
    })

    var studs = [
        {sid : 101, sname:'Sanket'},
        {sid : 102, sname:'Shruti'},
        {sid : 103, sname:'sghg'}
    ]

    var arr = studs.map(stud => <h1>{stud.sname}</h1>)

    return(
        <div>
            Array : {sqnos}
            Students: {studs}
        </div>
    )
}
export default ListComponent