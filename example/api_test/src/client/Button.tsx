import { useState } from 'preact/hooks'
import { render } from 'preact'
//import { App } from './About/app.tsx'
//console.log("#about.tsx");
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
//
export default function App(){
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Button</h1>
    <hr className="my-2" />
    <Button>Click me</Button>
  </div>
  );
}
render(<App />, document.getElementById('app')!);
