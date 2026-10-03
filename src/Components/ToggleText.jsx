import React from 'react'

const ToggleText = () => {
    const [show, setShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>ToggleText</button>
      {show && <p>This is the visible text.</p>}
    </div>
  )
}

export default ToggleText;
