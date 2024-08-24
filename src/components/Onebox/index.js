import './index.css'
import AppContext from '../../context/AppContext';
import msg from '../../assets/No Message illustration.png'

import { MdOutlineLightMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TbHomeFilled } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInbox } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Onebox = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/'); 
    };
    return (
        <AppContext.Consumer>
            {value => {
                const {isDarkTheme, toggleTheme} = value
                const onToggleTheme = () => {
                    toggleTheme();
                };
                return (
                    <>
                    {isDarkTheme ? (
                    <div className='home-container-dark'>
                        <div className='sidebar-dark'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8JCQkAAADd3d0FBQVcXFz5+fkTExOXl5f8/PwMDAx+fn7FxcVLS0vW1tb39/fh4eHQ0NDx8fGysrLq6upQUFDIyMhlZWUkJCQ1NTUbGxuOjo4VFRVycnJCQkI9PT2JiYmpqakrKyu8vLyioqKCgoJsbGympqYqKiqxsbFgYGBXV1dxVkT3AAAGHUlEQVR4nO2caXuyOhCGYYggQQQRd62t1va0/f//78xAF5e4VOEYep77ej+9tZjbSTKTxToOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4A8RhvduQd2E/wfFe7egbsLMy+p/kzSt/T2Ok27aeb3v4Dudl+ek3vc4RTcez4pPuLb+Gq4HNLvjYPBaNF94ju/71TeimMf89QPptnM/RTak4MWrowGhGGZPSxLD+8GGSo1Hw6T6XsqCftoWQd2+Y1piQ9dVwfu6+imV+336OCHlukG7jkFwIWyotSZ30PedygeL9zjWrnyA7fsJfhpqpSbPWdWGnZHLHcQCw6IRiuabtKooloOOJ1Ee49oSQ4amEWeNpIqmJNzjs36sSLvWxLBQnEfdsApDSRP564NMYd+Gtz/1Wn4MlUvBaFhFU/gZeXuiyNV2GXJLKGits/CmwShDkLNEeyJjULmWGXJHdeN+4t+SnTnL+44XTRWpn0/OJkNS/zwlt1bhHmcJ9SNok6FyNUvO8ttqrA4Xaq7WVhqWcQwW3Ssnd+6iYdJ/KDqovYZa0XjRu+5hnAfzp4etEWilYRHFUee6JoU5ryUOnmedIVepRSH+y1bJ4E0fx6S09YYSRXp4/mWRyn5hGk3d/S5qqaEiWr39blHMgsMFmR5mpSFHUVM7LQqUSzzlJeHwgw4mGYsNJYyPHrf7otW5nzjJ21LqNJOipYYSxkXPZ8ULghg6+fPSVU0z5BVja51c1k3T2UQWS00z1KQG/WKInXtKslhJljCOQpsNpUqVrHGmEveddEPuQRb8ESR7DaV547PnGv5wEZA+Ej/rDTmK0zOKfn+geCXR2BhKfRN58kpjV81C2bY/Hr9GGPJE8dILi+2lQ8kwf12e6qHNMCzWGkeyRr5Znf+ErDdUrmz6h/vdlEsBP5e1xM56vpGG0kgVv+0qhlKpedGYzug1xZB76mq3lWLYe5kTGauYHe2mGNJ4tp01OJzDD80rEHOasNtQc1gMgaH5pus731cOZNvelCa0VlpZbVgctRmiwlldLbq8lpI5VU6vJ2Sss7UKArsNlX6fmJpeBLbMGrJYelwdWQ3SfLS03XD9HLPM4YYSB5FiWU45frqZkqkrB1pNF73F7m6UbYaaelk/ljLlcAqRtUY/cfzegrOEQVAH7jTqOtHOI5V9hh0nWX9oTQZDjuKynXVHc703m3xCU7l+ZLkhEZcvyXCkTdWmDkhNRvGczItdWj1lTpJFOz+2ztBVHUl26SYgc71CR3bUOL6rdXF6GNH2jo19htxLix9suJ8GJpUjkBs/OU0ydJLyts+lqPn72mmWoZO8xkSuMf0bIjhf9MqTDusN1Zch1y39D/fc8vbrl1ZR73uJ3BhDVuSscWIDZuuXVjMvCf1PRcvn0i1DLl6GFy09aPyafW5ziOHG7nz4bVhuW6SROjPfcJaYyGljuZUjvxbt3lOw17BU9GbT04pcqq/LeryhhuXtn+OC5UWqrQ2Oci5tkqGfyOUDQ3lT/JeSUjvc3cFpjqFTXsILk3UrMM6o3PjVZv+7FE00dMJOS5sPwyezdH8XNWxMtigQQV8OX96Dw+mG5EzjYJ84tH31tGvoFFcQ5HULou2uyiNTsoRhp795hgJbZLOp2rnJpdzWOjlm2JxeukXeXm29TNN81ElMpzXNjGHRV3PZoZJCXP6pcSTXGEzHUQ01FLK3mOtwpXSgaHz0ULG5vZSbzolRF3vDJGffxR2GI4aNjCGvNPxwONKSJeTrJ+V//i1D0em+KKLl04lvTDa5lxYByzbTuHPqhk1zY1iE0Ped9G148msnTTZ0iit6vNb1TzV435AVm2J4Ifvj0LpbX9UYujD87/Dej+4IX4l1vbQew4MY3vH7hweG6s8b1tNLrfgOaa0zzf0M09befi/9NUPvg/a50VBOZvZQ7Uq+QH0d6eMgLhh80erdOrW3+WHxNoO3Stp6HUne7Xa9bXo3/i2Z0Ml7ve4O3h1DaKCmP3NSw1MvfO+T64Sq3sSuGAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYP4Fcq1Zha6amV4AAAAASUVORK5CYII=' alt="logo" className='imagey'/>
                            <TbHomeFilled className='icons'/>
                            <BsPersonFillAdd className='icons' />
                            <IoMdMail className='icons' />
                            <BiLogoTelegram className='icons' />
                            <FaThList className='icons' />
                            <FaInbox className='icons' />
                            <BiSolidBarChartAlt2 className='icons' />
                            <button className='side-down' type="button" onClick={handleLogout}>AS</button>
                        </div>
                        <div className='main-content-dark'>
                            <div className='content-header-dark'>
                                <h1 className='content-head'>Onebox</h1>
                                <div className='theme-cont'>
                                    <button className='mode-button' type='button' onClick={onToggleTheme}><MdOutlineLightMode className='mode-icon' /></button>
                                    <p>Tim's Workspace</p>
                                    <IoIosArrowDown className='down-icon' />
                                </div>
                                
                            </div>
                            <div className='middle-cont'>
                                <img src={msg} alt='mailImage' />
                                <h1 className='middle-cont-head'>It’s the beginning of a legendary sales pipeline </h1>
                                <p className='middle-cont-para-dark'>When you have inbound E-mails <br /> you’ll see them here</p>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className='home-container'>
                        <div className='sidebar'>
                            <img src='data:image/png;base64,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' alt="logo" className='imagey'/>
                            <TbHomeFilled className='icons'/>
                            <BsPersonFillAdd className='icons' />
                            <IoMdMail className='icons' />
                            <BiLogoTelegram className='icons' />
                            <FaThList className='icons' />
                            <FaInbox className='icons' />
                            <BiSolidBarChartAlt2 className='icons' />
                            <button className='side-down' type="button" onClick={handleLogout}>AS</button>
                        </div>
                        <div className='main-content'>
                            <div className='content-header'>
                                <h1 className='content-head'>Onebox</h1>
                                <div className='theme-cont'>
                                    <button className='mode-button' type='button' onClick={onToggleTheme}><MdOutlineLightMode className='mode-icon' /></button>
                                    <p>Tim's Workspace</p>
                                    <IoIosArrowDown className='down-icon' />
                                </div>
                                
                            </div>
                            <div className='middle-cont'>
                                <img src={msg} alt="mailImage" />
                                <h1 className='middle-cont-head'>It’s the beginning of a legendary sales pipeline </h1>
                                <p className='middle-cont-para'>When you have inbound E-mails <br /> you’ll see them here</p>
                            </div>
                        </div>
                    </div>)}
                    </>
                )
            }}
        </AppContext.Consumer>
        
    )
}


export default Onebox