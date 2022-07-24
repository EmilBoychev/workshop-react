import './style.css'

export const Choice = ({ onCloseBtn, deleteGlasses }) => {

    return (
        <div className='custom-ui'>
            <div className='backdrop' >
                <div className="delete" >
                    <h2>Are you sure?</h2>
                    <p>You want to delete this file?</p>
                    <button className='btn' onClick={() => onCloseBtn(true)}>No</button>
                    <button className='btn' onClick={() => {
                        deleteGlasses();
                        onCloseBtn(true);
                    }}>Yes, Delete it!</button>
                </div>
            </div>

        </div >
    );
}
