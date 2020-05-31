import styles from './Navbar.module.css';
import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Router from 'next/router';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ children }){
    const [toggleClass, setToggleClass] = useState(false);

    const toggleClicked = () => {        
        setToggleClass(!toggleClass);              
    }
    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <h3 className={styles.logo} >BlogOfMine</h3>
                    <div className={styles.icons} onClick={toggleClicked} ><FontAwesomeIcon icon={faBars} width="18"/></div>
                    
                        <div className={styles.backdrop }></div>                         
                    <div className={ toggleClass ? styles.slide: styles.menuWrapper }>
                        <div className={styles.closeBtn} onClick={toggleClicked}><FontAwesomeIcon icon={faTimes} width="18"/></div>
                        <ul className={styles.links}>                            
                            {/* <li>
                                
                                <Link href="/"> <a>Home</a> </Link>
                            </li>    
                            <li>
                                <Link href="/BlogList"><a>Blog</a></Link>
                            </li>                                                                                                                          
                            <li>
                                <Link href="/BlogList"><a>About</a></Link>
                            </li>  */}
                            
                                <li>
                                    <a onClick={() => Router.push('/')} >Home</a>
                                </li>    
                                <li>                                
                                    <a onClick={() => Router.push('/BlogList')} >Blog</a>
                                </li>                                                                                                                          
                                <li>
                                    <a onClick={() => Router.push('/BlogList')} >About</a>
                                </li>                                    

                        </ul>                 
                    </div>
                         
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}