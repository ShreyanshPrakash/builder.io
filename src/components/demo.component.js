import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

builder.init("28d0ae76770e443eabc00e79bea4ad34");

const DemoPage = () => {
    const [pageJson, setPage] = useState(null)
  
    useEffect(() => { 
      builder.get('page', { url: '/' }).promise().then(setPage)
    }, [])
  
    return (
      <React.Fragment>
        <div>
          <p>Demo website</p>
        </div>
        <BuilderComponent model="page" content={pageJson} />
      </React.Fragment>
    )
}

export {
    DemoPage,
}