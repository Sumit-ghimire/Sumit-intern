import Button from './component/Button'
import Form from './component/Form'
import Header from './component/Header'
import Image from './component/Image'

function App(){
  return(
    <>
      <Header />
      <Form />

      <div className='flex justify-center gap-4'>
        <Button click="Show"/>
        <Button click="Click Me"/>
        <Button click="Add"/>
      </div>

      {/* This places the photo at the very end */}
      <Image /> 
      
    </>
  )
}

export default App;