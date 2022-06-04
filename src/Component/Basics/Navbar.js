    import React from 'react'

    const Navbar = ({filterItem, menuList}) => {
    return(
        <>
            <nav className='navbar'>
            <div className='btn-group'>
                {menuList.map((curElem) => {
                    return(
                        <button 
                            className='btn-group__item'
                            onMouseOver= {() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    ) 
                })}
            </div>
        </nav>
        </>
    )
    }

    export default Navbar