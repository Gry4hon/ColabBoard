import "bootstrap/dist/css/bootstrap.css";


interface ButtonProps{
    children: string;
    onButtonPressed: () => void;
}


function ButtonComp({children, onButtonPressed}: ButtonProps){
    return(
        <>
        <div className="container">
        <button type="button" className="btn btn-primary" onClick={onButtonPressed}>{children}</button>
        </div>
        </>
    );
}

export default ButtonComp;