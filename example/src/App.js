import React from 'react'

import { Button } from 'cc-custom-button'
import 'cc-custom-button/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <Button label='Primary Button' className='btn-primary' />
      <Button label='Secondary Button' className='btn-secondary' />
      <Button label='Success Button' className='btn-success' />
    </div>
  )
}

export default App
