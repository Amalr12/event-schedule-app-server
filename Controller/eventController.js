const events=require("../model/eventModel")

exports.addEventController=async(req,res)=>{
 const {title,date,day,startTime,endTime,description,created}=req.body
 console.log(title,date,day,startTime,endTime,description,created);
 

 try {
    const dateEvent = await events.findOne({date})
    if(dateEvent){
        res.status(406).json(`A Event is Added in the Date`)
    }else{
        const newDateEvent =  new events({
            title,date,day,startTime,endTime,description,created
        })
        await newDateEvent.save()
        res.status(200).json(newDateEvent)
    }
 } catch (error) {
    res.status(500).json(error)
 }
}

exports.getEventController=async(req,res)=>{
    try {
          const allEvents= await events.find()
          res.status(200).json(allEvents)
    } catch (error) {
        res.status(500).json(error)
    }
  
}

exports.deleteEventController=async (req,res)=>{
    const {id}=req.params
    try {
        await events.findByIdAndDelete({_id:id})
        res.status(200).json(`Event Deleted`)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateEventController=async(req,res)=>{
    const {id}=req.params

    try {
        const updatedEvent=await events.findByIdAndUpdate(id,req.body, { new: true })
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(500).json(error)
    }
}