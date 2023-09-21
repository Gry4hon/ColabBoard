import "bootstrap/dist/css/bootstrap.css";
interface PracticeProps{
    storyHeader: string;
    children: string;
    onActionSelected: (actionWord: string) => void;
}

function PropComponent(storyProps: PracticeProps){
    const theActionWord = "Revolution!";

    return(
        <>
        <div className="container">
            <h1>{storyProps.storyHeader}</h1>
            <p>{storyProps.children}</p>
            <button onClick={() => {storyProps.onActionSelected(theActionWord)}}>GET THE ACTION WORD!!!</button>
        </div>
        </>
    );
}

export default PropComponent;