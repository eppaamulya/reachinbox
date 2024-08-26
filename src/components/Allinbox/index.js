import './index.css'
import { MdRefresh } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import AppContext from '../../context/AppContext';
import { BiLogoTelegram } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidShare } from "react-icons/bi";


const Allinbox = () => { 
    return (
        <AppContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                return (
                    <>
                        {isDarkTheme ? (
                            <div className='inbox-page'>
                                <div className='inbox-container-dark'>
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
                                    <hr className='hr-line-dark' />
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
                                    <hr className='hr-line-dark' />
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
                                    <hr className='hr-line-dark' />
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
                                    <hr className='hr-line-dark' />  
                                </div> 
                                <div className='mail-container'>
                                    <div className='mail-cont-1-dark'>  
                                        <div className='mail-inside-1'>
                                            <h1 className='mail-head'>Orlando</h1>
                                            <p className='mail-para-1'>Orladam@gmail.com</p>
                                        </div>
                                        <div className='mail-cont-2'>
                                            <div className='mail-inside-2-dark'>
                                                <p className='round-yellow'></p>
                                                <p className='mail-para-2'>Meeting Completed</p>
                                                <IoIosArrowDown className='icon-1'  />
                                            </div>
                                            <div className='mail-inside-3-dark'>
                                                <p className='mail-para-2'>Move</p>
                                                <IoIosArrowDown className='icon-1' />
                                            </div>
                                            <BsThreeDots className='dot-icon-dark' />
                                        </div>    
                                    </div>
                                    <div className='mail-cont-3-dark'>
                                        <div className='mail-inside-4'>
                                            <h1 className='mail-head-1'>New Product Launch</h1>
                                            <p className='mail-para-3-dark'>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
                                            <p className='mail-para-3-dark'>to : lennon.j@mail.com</p>
                                            <p className='mail-para-3-dark'>Hi {'{FIRST_NAME}'},</p>
                                            <p className='mail-para-3-dark'>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>
                                        </div>
                                        <p className='mail-para-3-dark'>20 june 2022 : 9:16AM</p>
                                    </div>
                                    <button className='reply-button'><BiSolidShare className='reply-icon' />Reply</button> 
                                </div> 
                                <div className='right-container-dark'>
                                    <p className='mail-para-5-dark'>Lead Details</p>
                                    <div >
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4-dark'>Name</p>
                                            <p className='mail-para-3-dark'>Oriando</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4-dark'>Contact No</p>
                                            <p className='mail-para-3-dark'>+54-9062827869</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4-dark'>Email ID</p>
                                            <p className='mail-para-3-dark'>Oriando@gmail.com</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4-dark'>Linkedin</p>
                                            <p className='mail-para-3-dark'>linkedin.com/in/timvadde/</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4-dark'>Company Name</p>
                                            <p className='mail-para-3-dark'>Reachinbox</p>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            ) : (
                            <div className='inbox-page'>
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
                                <div className='mail-container'>
                                    <div className='mail-cont-1'>  
                                        <div className='mail-inside-1'>
                                            <h1 className='mail-head'>Orlando</h1>
                                            <p className='mail-para-1'>Orladam@gmail.com</p>
                                        </div>
                                        <div className='mail-cont-2'>
                                            <div className='mail-inside-2'>
                                                <p className='round-yellow'></p>
                                                <p className='mail-para-2'>Meeting Completed</p>
                                                <IoIosArrowDown className='icon-1'  />
                                            </div>
                                            <div className='mail-inside-3'>
                                                <p className='mail-para-2'>Move</p>
                                                <IoIosArrowDown className='icon-1' />
                                            </div>
                                            <BsThreeDots className='dot-icon' />
                                        </div>    
                                    </div>
                                    <div className='mail-cont-3'>
                                        <div className='mail-inside-4'>
                                            <h1 className='mail-head-1'>New Product Launch</h1>
                                            <p className='mail-para-3'>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
                                            <p className='mail-para-3'>to : lennon.j@mail.com</p>
                                            <p className='mail-para-3'>Hi {'{FIRST_NAME}'},</p>
                                            <p className='mail-para-3'>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>
                                        </div>
                                        <p className='mail-para-3'>20 june 2022 : 9:16AM</p>
                                    </div> 
                                    <button className='reply-button'><BiSolidShare className='reply-icon' />Reply</button> 
                                </div> 
                                <div className='right-container'>
                                    <p className='mail-para-5'>Lead Details</p>
                                    <div >
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4'>Name</p>
                                            <p className='mail-para-3'>Oriando</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4'>Contact No</p>
                                            <p className='mail-para-3'>+54-9062827869</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4'>Email ID</p>
                                            <p className='mail-para-3'>Oriando@gmail.com</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4'>Linkedin</p>
                                            <p className='mail-para-3'>linkedin.com/in/timvadde/</p>
                                        </div>
                                        <div className='mail-inside-5'>
                                            <p className='mail-para-4'>Company Name</p>
                                            <p className='mail-para-3'>Reachinbox</p>
                                        </div>    
                                    </div>
                                </div>     
                            </div>    
                        )}
                    </>
                )
            }}
        </AppContext.Consumer>    
    )

}

export default Allinbox;