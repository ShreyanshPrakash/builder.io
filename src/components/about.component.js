import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

builder.init("28d0ae76770e443eabc00e79bea4ad34");

const AboutPage = () => {
    const [pageJson, setPage] = useState(null)
  
    useEffect(() => { 
      builder.get('page', { url: '/' }).promise().then(setPage)
    }, [])
  
    return (
      <React.Fragment>
        <BuilderComponent model="page" content={pageJson} />
      </React.Fragment>
    )
}

export {
  AboutPage,
}