export default function Boox(props){

    // const [x , y] = React.useState(props.on)
    
    
  const styles = {
    backgroundColor: props.on ? "purple" : "transparent"
  }
//   function toggle() {
//     y(previous => !previous )
//   }
  


    return(

        <div 
        style={styles} 
        className="sqboxes"
        onClick={() => props.toggle(props.id)}
        // onClick={toggle}
        ></div>
    )
}