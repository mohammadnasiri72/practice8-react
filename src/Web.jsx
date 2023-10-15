import { Link, Outlet } from 'react-router-dom'

export default function Web(props) {
    console.log(props);
    return (
        <>
            <div style={{color:props.styleText , border:`1px solid ${props.styleBorder}`}} className="d-flex">
                <div>
                    <Link style={{color:props.styleText , border:`1px solid ${props.styleBorder}`}} className='d-block p-3 test m-2' to="/">Home</Link>
                    <Link style={{color:props.styleText , border:`1px solid ${props.styleBorder}`}} className='d-block p-3 test m-2' to="/About">About</Link>
                    <Link style={{color:props.styleText , border:`1px solid ${props.styleBorder}`}} className='d-block p-3 test m-2' to="/User">User</Link>
                    <Link style={{color:props.styleText , border:`1px solid ${props.styleBorder}`}} className='d-block p-3 test m-2' to="/options">options</Link>
                    
                </div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
