import React from 'react'

const PopUpVarifivation = ({ visible, onClose }) => {
    if (!visible) return null

    const handleOnClose = (e) => {
        if (e.target.id === "contain") onClose()

    }
    return (
        <>
            <div
                id='contain'
                onClick={handleOnClose}
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex' >
                <div className='bg-[#fff] p-2 rounded text-gray-600 font-body' >
                    <form className='flex flex-col gap-3 justify-center items-center'  >
                        <div className='flex gap-evenly w-full' >
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">GST Cenrification</label>
                                <input type="file" name="gst" />
                            </div>
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">Company PAN Card</label>
                                <input type="file" name="pan" />
                            </div>
                        </div>
                        <div className='flex gap-evenly w-full' >
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">CIN</label>
                                <input type="file" name="cin" />
                            </div>
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">Udyog Aadhaar</label>
                                <input type="file" name="udyog" />
                            </div>
                        </div>
                        <div className='flex gap-evenly w-full' >
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">Udyam</label>
                                <input type="file" name="udyam" />
                            </div>
                            <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                                <label htmlFor="">FSSAI certificate</label>
                                <input type="file" name="fssai" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 text-xl forn-bold text-gray-600 w-full' >
                            <label htmlFor="">Shopes & Establishment License</label>
                            <input type="file" name="license" />
                        </div>
                        <button type='submit' className='bg-blue-500 p-2 rounded text-white font-bold' >
                            Submit
                        </button>
                    </form>

                    <button
                        className='bg-gray-500 p-2 rounded text-white font-bold w-full my-2'
                        onClick={onClose} >
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUpVarifivation