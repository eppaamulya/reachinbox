import './index.css'
import { MdRefresh } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import AppContext from '../../context/AppContext';
import { BiLogoTelegram } from "react-icons/bi";


const Allinbox = () => { 
    return (
        <AppContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                return (
                    <>
                        {isDarkTheme ? (
                            <div className='inbox-container'>
                                <div className='inbox-top'>
                                    <div className='inbox-top-1'>
                                        <h1 className='inbox-head'>All Inbox(s)</h1>
                                        <IoIosArrowDown className='inbox-down' />
                                    </div>
                                    <div>
                                        <button className='inbox-refresh-dark'><MdRefresh className='refresh-icon-dark'/></button>
                                    </div> 
                                </div>
                                <p className='inbox-para'><span className='span-inbox-dark'>25/25</span> Inboxes selected</p>
                                <input type='search' placeholder='Search' className='input-dark' /> 
                                <div className='inbox-cont-1'>
                                    <p className='para-26-dark'>26</p>
                                    <p>New Replies</p>
                                    <p>Newest</p>
                                    <IoIosArrowDown className='down' />
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>Beata@gmail.com</p>
                                        </div> 
                                        <><p className='para-m'>Mar 7</p></>   
                                    </div>
                                    <p className='para-msg'>I've tried a lot and.</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4-dark'>
                                        <p className='round-green'></p>
                                        <p className='para-g'>Interested</p>
                                        </div>
                                        <div className='inside-cont-4-dark'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>Sanya@gmail.com</p>
                                        </div>  
                                        <><p className='para-m'>Mar 7</p></>    
                                    </div>
                                    <p className='para-msg'>I've tried a lot and.</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4-dark'>
                                        <p className='round-blu'></p>
                                        <p className='para-blu'>Closed</p>
                                        </div>
                                        <div className='inside-cont-4-dark'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>william@gmail.com</p>
                                        </div> 
                                        <><p className='para-m'>Mar 7</p></>  
                                    </div>
                                    <p className='para-msg'>Payment not going through</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4-dark'>
                                        <p className='round-green'></p>
                                        <p className='para-g'>Interested</p>
                                        </div>
                                        <div className='inside-cont-4-dark'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />  
                            </div> 
                            ) : ( 
                            <div className='inbox-container'>
                                <div className='inbox-top'>
                                    <div className='inbox-top-1'>
                                        <h1 className='inbox-head'>All Inbox(s)</h1>
                                        <IoIosArrowDown className='inbox-down' />
                                    </div> 
                                    <div>
                                        <button className='inbox-refresh'><MdRefresh className='refresh-icon'/></button>
                                    </div>    
                                </div>
                                <p className='inbox-para'><span className='span-inbox'>25/25</span> Inboxes selected</p> 
                                <input type='search' placeholder='Search' className='input'/> 
                                <div className='inbox-cont-1'>
                                    <p className='para-26'>26</p>
                                    <p>New Replies</p>
                                    <p>Newest</p>
                                    <IoIosArrowDown className='down' />
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>Beata@gmail.com</p>
                                        </div> 
                                        <><p className='para-m'>Mar 7</p></>   
                                    </div>
                                    <p className='para-msg'>I've tried a lot and.</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4'>
                                        <p className='round-green'></p>
                                        <p className='para-g'>Interested</p>
                                        </div>
                                        <div className='inside-cont-4'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>Sanya@gmail.com</p>
                                        </div>  
                                        <><p className='para-m'>Mar 7</p></>    
                                    </div>
                                    <p className='para-msg'>I've tried a lot and.</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4'>
                                        <p className='round-blu'></p>
                                        <p className='para-blu'>Closed</p>
                                        </div>
                                        <div className='inside-cont-4'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className='inbox-cont-2'>
                                    <div className='inside-cont-1'>
                                        <div className='inside-cont-2'>
                                            <p className='round-blue'></p>
                                            <p className='para-b'>william@gmail.com</p>
                                        </div> 
                                        <><p className='para-m'>Mar 7</p></>  
                                    </div>
                                    <p className='para-msg'>Payment not going through</p>
                                    <div className='inside-cont-3'>
                                        <div className='inside-cont-4'>
                                        <p className='round-green'></p>
                                        <p className='para-g'>Interested</p>
                                        </div>
                                        <div className='inside-cont-4'>
                                            <BiLogoTelegram className='tele' />
                                            <p>Campaign Name</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='hr-line' />  
                            </div>    
                        )}
                    </>
                )
            }}
        </AppContext.Consumer>
        
    )

}

export default Allinbox;