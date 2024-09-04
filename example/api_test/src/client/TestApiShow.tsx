
import { render } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from '../components/Head';
import Footer from '../components/Footer';
import HttpCommon from './lib/HttpCommon';

let pageItems: any[] = [];
let pageItem: any = {};
let itemId: number = 0;
// 
const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let items: any[] = [];
//
export function App() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  useEffect(() => {
    (async() => {
//      console.log('Count updated:', count);
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id') || "";
      itemId = Number(id);
console.log(itemId);
      getItem(itemId);
    })()
  }, []);
  //
    /**
   *
   * @param
   *
   * @return
   */
    const getItem = async function(id: number) {
      try{
  console.log("#getList");
        const item  = {
          "id": id,
        }      
        const json = await HttpCommon.serverPost(item, "/test/get");
        pageItem = json.data;
        console.log(json.data);
        setUpdatetime(new Date().toString());
      } catch (e) {
        console.error(e);
      } 
    }
  //
  const testProc = function(){
  }
  //
  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">Show</h1>
      <div id="resulte_form1" class="d-none"></div>
      <hr />
      <div class="card">
        <button class="btn-purple" onClick={() => testProc()}>[ Test ]
        </button>
      </div>
      <hr />
      <h1 class="text-4xl font-bold">{pageItem.title}</h1>
      <p>ID: {pageItem.id}</p>
      <hr class="my-1" />
      <pre>{pageItem.content}</pre>
      <hr class="my-1" />
      <form
        hx-post="/api/common/send_post"
        hx-trigger="submit"
        hx-target="#resulte_form1"
        hx-on--before-request=""
        hx-on--after-request="location.href='/testapi' "
        className= "my-0"
        >
        <input type="text" name="api_url" value="/test/delete"
        className="d-none" />
          <input type="text" name="id" value={pageItem.id} 
          />
          <button 
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          type="submit"
          >Delete</button>
        </form>
        <hr className="my-1" />
        <h3 id="resulte_form1"></h3>

      <hr class="my-16"/>
    </div>
  </>
  )
}
render(<App />, document.getElementById('app')!);
/*
<div id ="resulte_form1"></div>
<label>name: </label><br />
<input type="text" name="name111" value="name123"/>
*/