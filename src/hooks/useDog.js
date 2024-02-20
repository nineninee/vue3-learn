import axios from 'axios'
import { ref, reactive, onMounted} from 'vue';

export default function(){
  let dogList = reactive([]);

  async function addDog() {
    try{
      let result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(result.data.message)
      console.log(dogList);
    }catch(err){
      alert(err)
    }
  }

  onMounted(()=>{
    addDog()
  })

  return {dogList, addDog}
}
