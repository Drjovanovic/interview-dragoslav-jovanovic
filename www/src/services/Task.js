import axios from 'axios';

export let getTasks = async () => {
    let result = []; 
    axios.post('/api/tasks', {}).then(r => {
          console.log('response from axios', r)
          result = r.tasks
        })   
    return await result;
}