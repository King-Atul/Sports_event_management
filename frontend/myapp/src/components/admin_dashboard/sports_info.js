import React, {useState} from "react";
import ToDo from "./toDo";
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import Navbar from "../home/navbar"
import Footer from '../home/footer'

const item1={
    id:v4(),
    title:"PLayer Records",
    priority:"High",
    department:"Water Problem",
    issueDate:"11/08/2022",
    completionDate:"15/08/2022",
    emp:"Sonali",
    comment:""
}
const item2={
    id:v4(),
    title:"Coaches Information",
    priority:"Low",
    department:"Road Problem",
    issueDate:"04/05/2022",
    completionDate:"13/05/2022",
    emp:"Asha",
    comment:""
}
const item3={
    id:v4(),
    title:"Tournament Dates",
    priority:"High",
    department:"Garbage Problem",
    issueDate:"14/03/2022",
    completionDate:"15/03/2022",
    emp:"Divya",
    comment:""
}
const item4={
    id:v4(),
    title:"District",
    // priority:"Medium",
    // department:"Electricity Problem",
    // issueDate:"12/07/2022",
    // completionDate:"15/07/2022",
    // emp:"Naina",
    // comment:""
}
const item5={
    id:v4(),
    title:"Taluka",
    priority:"High",
    department:"Water Problem",
    issueDate:"12/07/2022",
    completionDate:"15/07/2022",
    emp:"Arun",
    comment:""
}
const item6={
  id:v4(),
  title:"State",
  priority:"High",
  department:"Water Problem",
  issueDate:"12/07/2022",
  completionDate:"15/07/2022",
  emp:"Arun",
  comment:""
}

const item7={
    id:v4(),
    title:"Players List",
    priority:"High",
    department:"Water Problem",
    issueDate:"12/07/2022",
    completionDate:"15/07/2022",
    emp:"Arun",
    comment:""
}


export default function Sports_info(){

    const [isDragging, setIsDragging] = useState(false)
    const [dragId, setDragId] = useState('')
    const [state, setState] = useState({
        assignTask:{
            title:"",
            items:[item1, item2,item7]
        },
        
        done:{
            title:"",
            items:[item5,item6,item4]
        },
        inProgress:{
            title:"",
            items:[item3]
        },
        // rejectedTasks:{
        //     title:"",
        //     items:[item4]
        // }
    })


    function handleOnDragEnd({destination, source}) {
        setIsDragging(false)
        

        if(!destination)
        {
            return
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId)
        {
            return
        }
        const itemCopy = {...state[source.droppableId].items[source.index]}
        setState(prev=>{
            prev={...prev}
            prev[source.droppableId].items.splice(source.index, 1)
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
      }

      function handleOnDragStart(e)
      {
        setIsDragging(true)
        setDragId(e.draggableId)
      }

    return(
      <div>
        <Navbar/>
        <div className="w-full h-max bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-300 py-2 mt-[70px] min-h-[700px]">
            <div className="container mx-auto h-max rounded-xl mt-6 py-2">
               
                <br></br>
                {/* bg-[#303030] */}
                <div className="flex flex-row items-center justify-center gap-4  py-2 w-11/12 mx-auto rounded-xl">
                    <h1 className="font-[Poppins] text-black font-semibold text-xl">Sports Information </h1>
                </div>
                                
                <div className="flex flex-row items-start justify-between mt-4 w-11/12 mx-auto">
            
                    <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
                        {_.map(state, (data, key)=>{
                            return(
                                
                                    <div className={`flex flex-col items-start justify-center w-1/4 px-6 ${isDragging ? "border-[0.5px] border-white border-dashed rounded-xl":"border-0"}`}>
                                        {/* <h1 className="font-[Poppins] text-white text-lg py-4 text-start">{data.title}</h1> */}
                                    
                                        <Droppable droppableId={key}>
                                            {(provided)=>{
                                                return(
                                                    <div {...provided.droppableProps} ref={provided.innerRef} className="w-full">
                                                        {data.items.map((el, index)=>{
                                                            return(
                                                                <Draggable key={el.id} index={index} draggableId={el.id}>
                                                                    {(provided)=>{
                                                                        return(
                                                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className={`py-2`}>
                                                                                <ToDo description={el} isdraggable={isDragging} dragid={dragId} column={data.title}/>
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </Draggable>  
                                                            )
                                                        })}
                                                    </div>
                                                )}}
                                        </Droppable>
                                    </div>
                            )
                        })}
                    </DragDropContext>

                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}