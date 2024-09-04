
import { render } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from '../components/Head';
import Footer from '../components/Footer';
import HttpCommon from './lib/HttpCommon';
//import 'htmx.org';

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
      getList();
    })()
  }, []);
  //
    /**
   *
   * @param
   *
   * @return
   */
    const getList = async function() {
      try{
  console.log("#getList");
        const item  = {
          "userId": 0,
        }      
        const json = await HttpCommon.serverPost(item, "/test/get_list");
        items = json.data;
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
      <h1 class="text-4xl font-bold">TestApi</h1>
      <form class="my-0"
      hx-post="/api/common/send_post"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on--before-request=""
      hx-on--after-request="location.reload()"
      >
        <label>title:
          <input type="text" name="title" 
          class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <div class="error_message" id="error_message_title"></div>
        <hr class="my-1" />
        <label>Content:
          <input type="text" name="content"
          class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <div class="error_message" id="error_message_content"></div>
        {/*  */}
        <input type="text" name="api_url" defaultValue="/test/create"
        class="d-none" />
        <hr class="my-1" />
        <button type="submit"
        class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Add</button>
      </form>
      <div id="resulte_form1" class="d-none"></div>
      <hr />
      {items.map((item: any) => {
        return (
        <div key={item.id}>
          <h3 class="text-3xl font-bold">{item.title}</h3>
          <span>id: {item.id}</span>
          <a href={`/testapishow?id=${item.id}`}>
            <button class="btn-outline-purple ms-2">[ Show ]</button>
          </a>
          <hr />
        </div>
        );
      })}
      <hr class="my-16"/>
    </div>
  </>
  )
}
render(<App />, document.getElementById('app')!);
/*
<div class="card">
  <button class="btn-purple" onClick={() => testProc()}>[ Test ]
  </button>
</div>
<div id ="resulte_form1"></div>
*/