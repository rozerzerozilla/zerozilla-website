import React from 'react'
import { Helmet } from "react-helmet";
import {useLocation} from "react-router-dom"

export default function Metatags({ children }) {
    const location = useLocation();
  return (
      <div className="application">
          <Helmet>
              <meta charSet="utf-8" />
              <title>{children.title}</title>
              <link rel="canonical" href={`${process.env.REACT_APP_ENDPOINT_API}/${location.pathname}`} />
          </Helmet>
          ...
      </div>
  )
}
