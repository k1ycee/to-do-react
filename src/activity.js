import React from 'react'


const Activities = ({activity, reduce}) => {
    const todoList = activity.length ? (
        activity.map(acts =>{
            return(
                <div className="collection-item" key={acts.id}>
                    <span onClick={()=>{reduce(acts.id)}}>{acts.activity}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> Bruh haven't you had enough for the day!! </p>
    )
    return(
        <div className="activities collection">
        {todoList}
        </div>
    )
}

export default Activities;