import React from 'react'
import './Modal.css'
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css"

let Loader = () => {
    return <div className='modal_screen'>
        <div className='modal_center'>
            <div className='modal_input_card'>
                <div className='modal_heading_con'>
                    <Spinner size={30} className='loader' />
                    <p > please wait ... </p>


                </div>


            </div>

        </div>

    </div>
}

export default Loader