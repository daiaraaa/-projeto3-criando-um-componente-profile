import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./eu.jpeg'}
           name={'Daiara Barroso'} 
           bio={'Estudante de Desenvolvimento de Sistemas'} 
           contact={'+55 (85)994334741'} 
           email={'daiarabarroso09@gmail.com'} 
           githubUrl={'https://github.com/daiaraaa'} 
           instagramUrl={'https://instagram.com/daiarabarroso'} 
           letterboxdUrl={'https://letterboxd.com/Daiaraa'}
           />
        </div> 
   
  )
}
