// functional conponent
const Navbar = (props) => {
    return (
        <>
            <header className='navbar'>
                <div className='navbar__title navbar__item'>Cutco</div>
                <div className='navbar__item'>About Us</div>
                <div className='navbar__item'>Contact</div>
                <div className='navbar__item'>Help</div>        
            </header>
            <p>{props.example}</p>
        </>
    ); 
};

export default Navbar;