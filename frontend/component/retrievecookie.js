import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Retrieve = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);


   return (
      <div className="App">



         {cookies.Name && (
            <div>
               Name: <p>{cookies.Name}</p>
            </div>
         )}
         {cookies.Password && (
            <div>
               Password: <p>{cookies.Password}</p>
            </div>
         )}
      </div>
   );
};
export default Retrieve;