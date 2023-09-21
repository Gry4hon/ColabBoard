
import "bootstrap/dist/css/bootstrap.css";




const Alert = () => {


  return (
    
<div className={"alert alert-danger alert-dismissible fade show"} role="alert">
  ALERT YOU ARE BEING HACKED!
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    
  )
}

export default Alert
