import { FC } from "react"
import Form from "../Form_component"
import "../style.css"

const FLanding: FC = () => {
  return (
      <div className="container">
        <div className="text-landing-first">
          <h1>
              All your files in one secure location, accessible anywhere.
          </h1>
          <p>                
              Fylo stores your most important files in one secure location. 
              Access them wherever you need, share and collaborate with friends, 
              family, and co-workers.
          </p>
          <div className="form-section">
            <Form placeholder="Enter your email..." buttonText="Get Started" />
          </div>
        </div>

        <div className="image-landing">
            <img width="100%" src="/images/illustration-1.svg" alt="" />
        </div>
      </div>
  )
}

export default FLanding
