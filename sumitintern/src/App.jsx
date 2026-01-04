import Button from './component/Button'
import Form from './component/Form'
import Header from './component/Header'
import Image from './component/Image'
import Footer from './component/Footer'
import Select from './component/Select'

function App(){
  return(
    <>
      <Header />

      {/* Select dropdown added here */}
      <Select />

      <Form />

      <div className='flex justify-center gap-4'>
        <Button click="Show"/>
        <Button click="Click Me"/>
        <Button click="Add"/>
      </div>

      <Image />
      <Footer />
    </>
  )
}

export default App;
