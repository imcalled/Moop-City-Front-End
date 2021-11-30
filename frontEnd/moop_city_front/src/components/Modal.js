import './Modal.css'

const Modal = ({handleClose, show, switchTab, tabSelected}) => {
    const showHideModalContainer = show ? "modal display-block" : "modal display-none";
    const tabOneClass = tabSelected===1? "tabOneButtonSelected" : "tabOneButtonNotSelected";
    const tabTwoClass = tabSelected===2? "tabTwoButtonSelected" : "tabTwoButtonNotSelected";
    const tabOne = tabSelected===1? "tabOne displayTab" : "tabOne hideTab";
    const tabTwo = tabSelected===2? "tabTwo displayTab" : "tabTwo hideTab";

    // modal-main and modalTop may need ternary class to change colour, may also be poss to get rid of/rework

    return (
        <div className={showHideModalContainer}>
            
            <section className="modal-main">
                <div className="modalTop">
                <button className={tabOneClass} id={1} onClick={switchTab}>Add New</button>
                <button className={tabTwoClass} id={2} onClick={switchTab}>See Existing</button>
                <button type="button" className="modalButton" onClick={handleClose}>X</button>
            </div>
            <div className={tabOne} >
                
                <p>Modal Contents 1</p>
                <div className="addForm">
                    <img className="formImage" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
                    <div className="formInputs">
                    <div><label>Name: </label><input type="text"></input></div>
                    <div><label>Home address: </label><input type="text"></input></div>
                    {/* note address may need more formatting than this look at json object */}
                    <div><label>Workplace: </label><input type="text"></input></div>
                    </div>

                </div>
            
            </div>
            <div className={tabTwo}>
                
                <p>Modal Contents 2</p>
                <div className="seeContent">
                    {/* some mini components? scrollthrough? side scroll could mess with exit button tho unless come back to */}
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                    <div className="person">Person </div>
                </div>
            
            </div>
            </section>
        </div>

    )

}

export default Modal;