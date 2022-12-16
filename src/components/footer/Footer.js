import React, {useEffect} from 'react'
import './Footer.scss'

const Footer = () => {

    useEffect(() => {
        console.log('Footer mounted');
        //Cleanup function
        return () => {
            console.log('Footer unmounted');
        };
    }, []);


  return (
      <footer className='mt-5'>
          <div className='container'>
              <div className='row'>
                  <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 my-auto'>
                      <div className='text-center pt-4 pb-5'>
                          <h6>Address</h6>
                          <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer