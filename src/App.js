import './App.css';
import { useState, useEffect} from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import AddContent from './Components/AddContent';
import EditContent from './Components/EditContent';
import apiRequest from './Components/ApiRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const API_URL = `https://630cf630b37c364eb7fd9a57.mockapi.io/todos`
  
  const[contents, setContents] = useState([]);  
  const [newContent, setNewContent] = useState(""); 
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editingText, setEditingText] = useState("");
  const [isEditing, setEditing] = useState(false)  

  useEffect(()=> {
    // fetch will be done when the page is refreshed
     const fetchContent = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Did not receive expected data")
        const listContents = await response.json();
        setContents(listContents);
        setFetchError(null);
      }catch(err){        
        setFetchError(err.message)
      }finally{
        setIsLoading(false);
      }
     }
     setTimeout(()=>{
      (async () => await fetchContent())();
     }, 1000)    

  }, []); 

  // adding new content 
  const addContent = async (content) => {
    const id = contents.length ? Number(contents[contents.length -1].id) + 1 : 1;
    const myNewContent = {content, isCompleted: false, id};
    const listContents = [...contents, myNewContent];
    setContents(listContents);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myNewContent)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  }

  const handleCheck = (id) => {   
    const listContents = contents.map((content) => 
    content.id === id ? {...content, isCompleted : !content.isCompleted} : content);
    setContents(listContents);     
    
  } 
  
  // content editing
  const handleEdit = (id) => {  
    const updateText = contents.find((content) => 
    content.id === id);    
    setEditingText(updateText);      
    setEditing(true)  
   
  }  

  const handleEditSubmit = (e) => {
    e.preventDefault();    
    update()
   
  }
  const update = async (id)=>{
    const listContents = contents.map((c) => 
    c.id === editingText.id ? {...c, content : editingText.content  } : c );  
    setContents(listContents);
    setEditing(false);  

    const updateOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editingText)
    }
    const reqUrl = `${API_URL}/${editingText.id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }
  
  //  content deleting
  const handleDelete = async (id) => {
    const listContents = contents.filter((content) => content.id !== id);
    setContents(listContents);    

    const deleteOptions = {method: "DELETE"};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);

    toast.success("Content Deleted")
  }

  //  adding new content validation
  const handleSubmit = (e) => {
    e.preventDefault();   
    if(newContent === ""){
      toast.error("Please enter a Content");
      return
    }else if(newContent.length < 3){
      toast.error("Content must be a at least 3 characters");
      return
    }else{
      toast.success("Content Added")
      addContent(newContent)      
    }    
    setNewContent("");  
  }

  return (    
    <div className="App" id={localStorage.getItem("theme")}>      
        <ToastContainer />
        <Header />
        
        {
          isEditing ? 
          // {contents.isCompleted ?
          (<EditContent 
            editingText = {editingText}
            setEditingText = {setEditingText}
            handleEditSubmit = {handleEditSubmit}
          />) 
          : 
          (<AddContent 
              newContent = {newContent}
              setNewContent = {setNewContent}
              handleSubmit = {handleSubmit}
          />)
        }

        <main className='main' id={localStorage.getItem("theme")}>
          {isLoading && <p>Loading Contents...</p>}
          {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Content
                contents = {contents} 
                setContents = {setContents} 
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
                handleEdit = {handleEdit}
                />
          }
        </main>
        <Footer
          contents = {contents} 
        />       
    </div>
  );
}

export default App;
