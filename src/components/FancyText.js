export default function FancyText({title, text}) {
    return title
      ? <div className="font-bold text-xl mb-2" >{text}</div>
      : <h3  style={{fontFamily:"Lucida Handwriting", width:"75%", height:"100px",margin:"8px", paddingTop:"20px"}}>{text}</h3>
      
  }
  