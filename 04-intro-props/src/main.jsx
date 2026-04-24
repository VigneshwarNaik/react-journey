import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCard from './Recipe'

const root = createRoot(document.getElementById('root'))

root.render(
<RecipeCard/>
)