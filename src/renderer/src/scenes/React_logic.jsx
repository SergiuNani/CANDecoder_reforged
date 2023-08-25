import { Header } from '../components/header'
import { Typography } from '@mui/material'
import {
  useState,
  useReducer,
  createContext,
  useContext,
  useRef,
  forwardRef,
  useEffect,
  useLayoutEffect
} from 'react'
import { flushSync } from 'react-dom'
import { createPortal } from 'react-dom'

const Item = ({ isPacked, name }) => {
  if (isPacked) {
    return <li>{name} ; checked</li>
  }

  return <li>{name} ; unchecked</li>
}
const Item1 = ({ isPacked, name }) => {
  return <li> {isPacked ? <del>{name + ' ✔'}</del> : name}</li>
}
const Item2 = ({ isPacked, name }) => {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  )
}
const Element1 = () => {
  return (
    <div className=" m-8 border-orange-400 border-2 p-1">
      <Typography variant="h4">
        Conditional Rendering, based on "isPacked" prop in a component we rendering different things
      </Typography>
      <p className="text-indigo-300">IF Statement</p>
      <Item isPacked={true} name="THESE NUTS"></Item>
      <Item isPacked={false} name="THESE bitches"></Item>
      <p className="text-indigo-300">Ternary operatot : isPacked? TRUE : FALSE</p>
      <Item1 isPacked={true} name="THESE NUTS"></Item1>
      <Item1 isPacked={false} name="THESE bitches"></Item1>
      <p className="text-indigo-300">
        AND && operator. Remark: this mofo dont consider 0 as FALSE !!
      </p>
      <Item2 isPacked={true} name="THESE NUTS"></Item2>
    </div>
  )
}
// -----------------------------------------------------------------------------

const people = [
  {
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  },
  {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  },
  {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  },
  {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  },
  {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }
]

const Element2 = () => {
  const chemists = people.filter((person) => person.profession === 'chemist')
  const displayList = chemists.map((person) => {
    return (
      <li key={person.id} className="border-red-400 border-2 p-1">
        {person.name} is a {person.profession} -<p>More info: {person.accomplishment}</p>
      </li>
    )
  })
  return (
    <div className="border">
      <Typography variant="h3">Element 2</Typography>
      <Typography variant="h3" className="text-indigo-300">
        {' '}
        FILTER+ MAP used together to sort and filter an array of objects and display info
      </Typography>
      <ul>{displayList}</ul>
    </div>
  )
}
// --------------------------------------------------------------

function Element3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg'
    }
  })

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    })
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    })
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    })
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    })
  }

  return (
    <div className="border mt-9 ">
      <Typography variant="h3" className="text-indigo-300">
        Handling onChange text from input bars
      </Typography>
      <label>
        Name:
        <input className="text-slate-800" value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input
          className="text-slate-800"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input className="text-slate-800" value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input
          className="text-slate-800"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      {/* <img src={person.artwork.image} alt={person.artwork.title} /> */}
    </div>
  )
}

// --------------------------------------------------------------------

function Element4() {
  function Button({ onClick, children }) {
    return (
      <button className="border-orange-100 border-2 p-2" onClick={onClick}>
        {children}
      </button>
    )
  }

  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`)
    }

    return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
  }

  function UploadButton() {
    return <Button onClick={() => alert('Uploading!')}>Upload Image</Button>
  }
  return (
    <div className="border mt-8">
      <Typography variant="h3" className="text-indigo-300">
        button componenets , functions onClick
      </Typography>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  )
}

function Element5() {
  const [to, setTo] = useState('Alice')
  const [message, setMessage] = useState('Hello')

  function handleSubmit(e) {
    e.preventDefault()
    setTimeout(() => {
      alert(`You said ${message} to ${to}`)
    }, 100)
  }

  return (
    <form onSubmit={handleSubmit} className="text-indigo-500 m-5 border">
      <label>
        To:{' '}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  )
}

// ------------------------------------------------------------------
function Element6() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending((p) => p + 1)
    await delay(3000)
    setPending((p) => p - 1)
    setCompleted((c) => c + 1)
  }
  return (
    <div className="border ">
      <Typography variant="h3" className="text-indigo-300">
        When there are a million render requests, React will first batch all the comamands inside
        event handlers then will calc how many renders it actually needs to do
      </Typography>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </div>
  )
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// ------------------------------------------------------------------

let nextId = 0

function Element7() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState([])

  return (
    <div className="border ">
      <Typography variant="h3" className=" text-indigo-300">
        Element7 Adding elements to array
      </Typography>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }])
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  )
}

// ------------------------------------------------------------------

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' }
]

function Element8() {
  const [artists, setArtists] = useState(initialArtists)

  return (
    <div className="border">
      <Typography variant="h3" className="text-indigo-300">
        Element8 Deleting elements from array
      </Typography>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id))
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ------------------------------------------------------------------

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 }
]
function Element9() {
  const [shapes, setShapes] = useState(initialShapes)

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === 'square') {
        // No change
        return shape
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50
        }
      }
    })
    // Re-render with the new array
    setShapes(nextShapes)
  }

  return (
    <>
      <Typography variant="h3" className="text-indigo-300">
        Element9 Modifying elements from array
      </Typography>

      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20
          }}
        />
      ))}
      <a
        href="https://react.dev/learn/updating-arrays-in-state#adding-to-an-array"
        className="border"
      >
        LINK for more info about arrays
      </a>
    </>
  )
}

// ------------------------------------------------------------------

function Element10() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing')

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <div className="border ">
      <Typography variant="h3" className="text-indigo-300">
        Element 10 Reacting to input with STATE
      </Typography>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  )
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'))
      } else {
        resolve()
      }
    }, 1500)
  })
}

// ------------------------------------------------------------------------------------------------------------------------
function Element11() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="border">
      <Typography variant="h3" className="text-indigo-300">
        Element11 Lifting up the State variable to the parent
      </Typography>

      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to
        1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often
        translated as "full of apples". In fact, the region surrounding Almaty is thought to be the
        ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a
        likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  )
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow} className="button">
          Show
        </button>
      )}
    </section>
  )
}

// -------------------------------------------------------------------------------------------------------------
function Element12() {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element12 Syncing inputs
      </Typography>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </div>
  )
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  )
}

// -------------------------------------------------------------------------------------------------------------

function Element13() {
  const [query, setQuery] = useState('')
  const results = filterItems(foods, query)

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element13 Search results
      </Typography>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </div>
  )
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  )
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export function filterItems(items, query) {
  query = query.toLowerCase()
  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  )
}

export const foods = [
  {
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
  },
  {
    id: 1,
    name: 'Dal',
    description:
      'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
  },
  {
    id: 2,
    name: 'Pierogi',
    description:
      'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
  },
  {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
  },
  {
    id: 4,
    name: 'Dim sum',
    description:
      'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
  }
]

// -------------------------------------------------------------------------------------------------------------

function Element14() {
  const [contacts, setContacts] = useState(initialContacts14)
  const [selectedId, setSelectedId] = useState(0)
  const selectedContact = contacts.find((c) => c.id === selectedId)

  function handleSave(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData
      } else {
        return c
      }
    })
    setContacts(nextContacts)
  }

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element14 - Array mapping, reseting, saving etc
      </Typography>
      <ContactList14
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact14 key={selectedId} initialData={selectedContact} onSave={handleSave} />
    </div>
  )
}

const initialContacts14 = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
function ContactList14({ contacts, selectedId, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id)
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function EditContact14({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)
  return (
    <section>
      <label>
        Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email
          }
          onSave(updatedData)
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(initialData.name)
          setEmail(initialData.email)
        }}
      >
        Reset
      </button>
    </section>
  )
}

// -------------------------------------------------------------------------------------------------------------

const Element15 = () => {
  const [state, dispatch] = useReducer(ReducerFct, initialState)
  const contact = initialDataArray15.find((contact) => {
    return contact.id == state.selectedId
  })
  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element15 - useReductor
      </Typography>
      <ListComponent15
        contacts={initialDataArray15}
        selectedID={state.selectedId}
        dispatch={dispatch}
      />
      <br />
      <Chat15
        key={contact.id}
        contact={contact}
        message={state.message[`${state.selectedId}`]}
        dispatch={dispatch}
      />
    </div>
  )
}

function ReducerFct(state, action) {
  switch (action.type) {
    case 'Selected_changed': {
      return {
        ...state,
        selectedId: action.selectedID
      }
    }
    case 'edited_message': {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: action.message
        }
      }
    }
    case 'Send_clicked': {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: ''
        }
      }
    }

    default: {
    }
  }
}

const initialState = {
  selectedId: 1,
  message: {
    0: 'Hello 1',
    1: 'Hello 2',
    2: 'Hello 3'
  }
}
const ListComponent15 = ({ contacts, selectedID, dispatch }) => {
  return (
    <ul className="border">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="button"
          onClick={() => {
            dispatch({
              type: 'Selected_changed',
              selectedID: contact.id
            })
          }}
        >
          {selectedID === contact.id ? <b>{contact.name}</b> : contact.name}
        </li>
      ))}
    </ul>
  )
}

function Chat15({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        placeholder={'Chat to ' + contact.name}
        value={message}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value
          })
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Message send to ${contact.name}. Message: ${message}`)
          dispatch({
            type: 'Send_clicked'
          })
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  )
}

const initialDataArray15 = [
  { id: 0, name: 'Taylor', email: 'Taylor@gmail.com' },
  { id: 1, name: 'Alice', email: 'Alice@gmail.com' },
  { id: 2, name: 'Bob', email: 'Bob@gmail.com' }
]

// -------------------------------------------------------------------------------------------------------------

function Element16() {
  return (
    <div className="border danger">
      <TasksProvider>
        <Typography variant="h3" className="text-indigo-300">
          Element16 - useReducer +useContext - max efficiency for components that are bloated with
          useStates
        </Typography>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  )
}

const TasksContext = createContext(null)

const TasksDispatchContext = createContext(null)

function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks16)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function useTasks() {
  return useContext(TasksContext)
}

function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const initialTasks16 = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
]

function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()
  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('')
          dispatch({
            type: 'added',
            id: nextId16++,
            text: text
          })
        }}
      >
        Add
      </button>
    </>
  )
}

let nextId16 = 3

function TaskList() {
  const tasks = useTasks()
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTasksDispatch()
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          })
        }}
      />
      {taskContent}
      <button
        className="button"
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          })
        }}
      >
        Delete
      </button>
    </label>
  )
}

// -------------------------------------------------------------------------------------------------------------

function Element17() {
  const listRef = useRef(null)
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(initialTodos17)

  function handleAdd() {
    const newTodo = { id: nextId17++, text: text }
    flushSync(() => {
      setText('')
      setTodos([...todos, newTodo])
    })
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element17 - Scrolling to the last element
      </Typography>
      {/* <h1>Day off in Kyoto</h1> */}
      <button onClick={handleAdd}>Add</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

let nextId17 = 0
let initialTodos17 = []
for (let i = 0; i < 20; i++) {
  initialTodos17.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  })
}

// -------------------------------------------------------------------------------------------------------------
const MyInput18 = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />
})

function Element18() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element 18 - press button and focus on input with useRef. Later will be used to design a
        shortcut in your app
      </Typography>
      <MyInput18 ref={inputRef} />

      <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}

// -------------------------------------------------------------------------------------------------------------

function Element19() {
  const selectedRef = useRef(null)
  const [index, setIndex] = useState(0)

  return (
    <>
      <Typography variant="h3" className="text-indigo-300">
        Element 19 - Scroll Effect, if the images link were correct :)
      </Typography>
      <nav>
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            })
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  })
}

// -------------------------------------------------------------------------------------------------------------

function Element20() {
  const [planetList, planetID, setPlanetID] = useSelectOption('/planets')
  const [placesList, placeID, setPlaceID] = useSelectOption(
    planetID ? `/planets/${planetID}/places` : null
  )

  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element 20 - simulating responses from Server, useEffect, customHook
      </Typography>
      <label>
        Pick a planet:{' '}
        <select
          value={planetID}
          onChange={(e) => {
            setPlanetID(e.target.value)
          }}
        >
          {planetList?.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Pick a place:{' '}
        <select value={placeID} onChange={(e) => setPlaceID(e.target.value)}>
          {placesList?.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <p>
        You wanna go to : {placeID || '??'} which is located on {planetID || '??'}
      </p>
    </div>
  )
}

function useSelectOption(url) {
  const [list, setList] = useState(null)
  const [selectedID, setSelectedID] = useState('')

  useEffect(() => {
    if (url === null) {
      return
    }
    let ignore = false
    fetchData(url).then((resolve) => {
      if (!ignore) {
        setList(resolve)
        setSelectedID(resolve[0].id)
      }
    })

    return () => {
      ignore = true
    }
  }, [url])

  return [list, selectedID, setSelectedID]
}

function fetchData(url) {
  if (url === '/planets') {
    return fetchPlanets()
  } else if (url.startsWith('/planets/')) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/)
    if (!match || !match[1] || !match[1].length) {
      throw Error('Expected URL like "/planets/earth/places". Received: "' + url + '".')
    }
    return fetchPlaces(match[1])
  } else
    throw Error('Expected URL like "/planets" or "/planets/earth/places". Received: "' + url + '".')
}

async function fetchPlanets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'earth',
          name: 'Earth'
        },
        {
          id: 'venus',
          name: 'Venus'
        },
        {
          id: 'mars',
          name: 'Mars'
        }
      ])
    }, 1000)
  })
}
async function fetchPlaces(planetId) {
  if (typeof planetId !== 'string') {
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      if (planetId === 'earth') {
        resolve([
          {
            id: 'laos',
            name: 'Laos'
          },
          {
            id: 'spain',
            name: 'Spain'
          },
          {
            id: 'vietnam',
            name: 'Vietnam'
          }
        ])
      } else if (planetId === 'venus') {
        resolve([
          {
            id: 'aurelia',
            name: 'Aurelia'
          },
          {
            id: 'diana-chasma',
            name: 'Diana Chasma'
          },
          {
            id: 'kumsong-vallis',
            name: 'Kŭmsŏng Vallis'
          }
        ])
      } else if (planetId === 'mars') {
        resolve([
          {
            id: 'aluminum-city',
            name: 'Aluminum City'
          },
          {
            id: 'new-new-york',
            name: 'New New York'
          },
          {
            id: 'vishniac',
            name: 'Vishniac'
          }
        ])
      } else console.log('Unknown planet ID: ' + planetId)
    }, 1000)
  })
}

// -------------------------------------------------------------------------------------------------------------

function Element21() {
  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element 20 - MODALS , createPortal react-dom
      </Typography>

      <div className="clipping-container">
        <NoPortalExample />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </div>
  )
}
function NoPortalExample() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal without a portal</button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </>
  )
}
function PortalExample() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal using a portal</button>
      {showModal &&
        createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
    </>
  )
}

function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

// -------------------------------------------------------------------------------------------------------------

function Element22() {
  return (
    <div className="border danger">
      <Typography variant="h3" className="text-indigo-300">
        Element 22 - onHOVER modal - useLayoutEffect)
      </Typography>

      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead! This is why it's displayed below instead! This
            is why it's displayed below instead! This is why it's displayed below instead! This is
            why it's displayed below instead! This is why it's displayed below instead! This is why
            it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  )
}
function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null)
  const buttonRef = useRef(null)
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
    </>
  )
}
function Tooltip({ children, targetRect }) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}

function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

const React_Logic = () => {
  return (
    <>
      <Header title="React Logic" />
      <Element1 />
      <Element2 />
      <Element3 />
      <Element4 />
      <Element5 />
      <Element6 />
      <Element7 />
      <Element8 />
      <Element9 />
      <Element10 />
      <Element11 />
      <Element12 />
      <Element13 />
      <Element14 />
      <Element15 />
      <Element16 />
      <Element17 />
      <Element18 />
      <Element19 />
      <Element20 />
      <Element21 />
    </>
  )
}

export default React_Logic
