import React from "react";
const Jumbotron = () => {
    return(
        <div className="position-relative p-5  text-muted bg-light border border-dashed rounded-2 m-3">
          <h1 className="text-body-emphasis">A Warm Welcome!</h1>
          <p className="col mb-4">
          This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
          </p>
          <button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
          </button>
        </div>
    )
}

export default Jumbotron