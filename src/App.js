import './App.css';
function Header(props){
  return <header>
    <h1><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nev(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
    <li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>
        {t.title}
      </a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  const mode = 'WELCOME';
  const topics = [
    {id:1, title:'html', bodt:'html is ...'},
    {id:2, title:'css', bodt:'css is ...'},
    {id:3, title:'javascript', bodt:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        mode = 'WELCOME'
      }}></Header>
      <Nev topics={topics} onChangeMode={(id)=>{
        mode = 'READ'
      }}></Nev>
      {content}
    </div>
  );
}

export default App;
