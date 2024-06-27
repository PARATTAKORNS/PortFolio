const Interviews = [
    {
        "id" : 1,
        "name" : "Mek",
        "age" : 21,
        "imgURL" : "Mek-notion.png"
    },
    {
        "id" : 2,
        "name" : "Pim",
        "age" : 22,
        "imgURL" : "Pim-notion.png"
    },
    {
        "id" : 3,
        "name" : "Pun",
        "age" : 20,
        "imgURL" : "pun-notion.png"
    },
    {
        "id" : 4,
        "name" : "Kong",
        "age" : 21,
        "imgURL" : "Kong-notion.png"
    }
]

function Interview(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-4">
        {
            Interviews.map( data => {
                return(
                    <div className="p-4 text-center flex flex-col items-center">
                        <img src={`/${data.imgURL}`} alt="" className="w-1/2 md:w-4/5"/>
                        <p className="text-xl">{data.name} ({data.age})</p> 
                    </div>
                )
            })
        }
        </div>
    )
}

export default Interview