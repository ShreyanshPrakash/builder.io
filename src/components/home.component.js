import React, { useEffect, useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';


const HomePage = () => {
    const [pageJson, setPage] = useState(null)
  
    return (
      <React.Fragment>
        <h>Home Page for Channel builder</h>
      </React.Fragment>
    )
}

export {
    HomePage,
}