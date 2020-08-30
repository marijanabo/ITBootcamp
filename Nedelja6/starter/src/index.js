import {Header} from './components/Header.js'
import {Select} from './components/Select.js'
import { PastLaunches } from './components/PastLaunches.js'

export const app = document.querySelector('#app')

app.appendChild(Header())
app.append(Select(), PastLaunches())