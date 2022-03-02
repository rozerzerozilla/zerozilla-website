import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { capSentence } from '../helper';

const BreadCrumbs = ({className}) => {
    const history = useHistory();
    const { pathname } = history.location;
    // console.log(pathname);
    const pathNames = pathname.split("/");
    // console.log(pathNames);
    return (
        <>
            {pathNames.slice(1).map((path, idx) => (
                <span key={idx + 1}>
                    {/* {(()=>{
                        console.log(path)
                    })()} */}
                    /<Link className={`customLink ${className}`} to={`/${path}`}>{' '}{path === '' ? 'Home' : capSentence(path)}</Link>
                </span>
            ))}
        </>
    );
}
export default BreadCrumbs;