// Поместить в /src
// Используется для setup Jest + Enzyme
import Enzyme, {
    configure, shallow, mount, render
  } from 'enzyme'
  import Adapter from 'enzyme-adapter-react-16'
  import 'jest-styled-components'
  
  configure({ adapter: new Adapter() })
  
  // Для медиа запросов. Ибо их может не быть(в каком то из случаев)
  const matchMedia = () => ({
    matches: false,
    addListener() {},
    removeListener() {}
  })
  
  window.matchMedia = window.matchMedia || matchMedia
  
  export { shallow, mount, render }
  export default Enzyme
